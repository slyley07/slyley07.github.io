var plates = [];
var checked_plates = [];


var b = 0;

var lb_plates = ['2.5','5','10','25','35','45','55'];

var kg_plates = ['1.5', '2', '2.5', '5','10', '15', '20', '25'];

var plate_names = {'1.5': ['one', false],
                    '2': ['two', false],
                    '2.5': ['two_five', false],
                    '5': ['five', true],
                    '10': ['ten', true],
                    '15': ['fifteen', true],
                    '20': ['twenty', true],
                    '25': ['twenty_five', true],
                    '35': ['thirty_five', true],
                    '45': ['forty_five', true],
                    '55': ['fifty_five', false]
                  };

var possible_plates = [];

var output = document.getElementById('output');

function make_chex(arr) {
  var parent = document.getElementById('weights');
  parent.innerHTML = '';
  for (var a = 0; a < arr.length; a++) {
    var chex_div = document.createElement('div')
    chex_div.className = 'chex';

    var chex_p = document.createElement('p');
    chex_p.innerHTML = arr[a];

    var round_div = document.createElement('div');
    round_div.className = 'roundedOne';


    var chex_input = document.createElement('input');
    chex_input.id = arr[a];
    chex_input.dataset.num = plate_names[arr[a]][0];
    chex_input.type = "checkbox";
    console.log(plate_names[arr[a]][0]);

    if (plate_names[arr[a]][1]) {
      chex_input.setAttribute('checked', plate_names[arr[a]][1]);
    }

    var chex_label = document.createElement('label');
    chex_label.setAttribute('for', arr[a]);

    round_div.appendChild(chex_input);
    round_div.appendChild(chex_label);

    chex_div.appendChild(chex_p);
    chex_div.appendChild(round_div);
    parent.appendChild(chex_div);
  }

}

function lb_or_kg() {
  var meas = document.getElementById('measurement').value;
  output.innerHTML =  '';
  if (meas === 'lb') {
    possible_plates = lb_plates;

    make_chex(possible_plates)
    console.log(possible_plates);
    document.getElementById('weights').style.display = 'flex';

  } else {
    possible_plates = kg_plates;
    make_chex(possible_plates);
    document.getElementById('weights').style.display = 'flex';
    console.log(possible_plates);
  }
}

document.getElementById('measurement').addEventListener('change', lb_or_kg);



var plate_arr = document.getElementsByClassName('plated');

function getWeight() {
  plates = [];
  checked_plates = [];
  b = 0;

  output.innerHTML = '<p><span id="plated_0"></span><span id="bar"></span> <span id="plated_1"></span></p>';

  document.getElementById('plated_0').innerHTML = '';
  document.getElementById('plated_1').innerHTML = '';

  for (var i = 0; i < possible_plates.length; i++) {
    var check = document.getElementById(possible_plates[i]).checked;

    if (check) {
      checked_plates.unshift(parseFloat(possible_plates[i]));
    }
  }


  var weight = document.getElementById('weight').value;
  var bar_weight = document.getElementById('barbell').value;

  var new_weight = weight - bar_weight;

  new_weight = new_weight / 2;

  // console.log((new_weight * 2)+ bar_weight);
  if (new_weight > 0 && weight <= 1268 ) {
    calc(new_weight);
  } else if (weight > 1268) {
    output.innerHTML = '<p class="error">Chill out dude.</p>'
    output.style.display = 'block';
  } else if (new_weight === 0) {
    output.innerHTML = '<p class="error">Just use the bar</p>'
    output.style.display = 'block';
  } else {
    output.innerHTML = "<p class='error'>You can't have less weight than the bar!</p>"
    output.style.display = 'block';
  }
}


function calc(target_weight) {
  if (target_weight >= checked_plates[b]) {
    console.log(checked_plates[b]);
    target_weight = target_weight - checked_plates[b];
    plates.push(checked_plates[b]);
    if (target_weight >= checked_plates[b]) {
      calc(target_weight);
    } else {
      b++;
      calc(target_weight);
      return;
    }
  } else if (target_weight > 0 && target_weight < 5) {
    console.log(checked_plates[b]);
    console.log(target_weight);
    if (target_weight < checked_plates[b]) {
      b++;
      calc(target_weight);
      return;
    } else if (!checked_plates.includes(2.5)) {
        output.innerHTML = '<p class="error">Cannot plate</p>'
        output.style.display = 'block';
        return;
      } else if (checked_plates.includes(2.5) && target_weight !== 2.5) {
        output.innerHTML = '<p class="error">Cannot plate</p>'
        output.style.display = 'block';
        return;
      }
  } else if (target_weight > 0) {
    b++;
    calc(target_weight);
    return;
  } else {
    for (var w = 0; w < plates.length; w++) {
      var klass = document.getElementById(plates[w] + "").dataset.num;
      document.getElementById('plated_1').innerHTML += '<span class="sing_plate ' + klass + '">' + plates[w] + '</span>';
    }

    plates.reverse();

    for (var t = 0; t < plates.length; t++) {
      var klass = document.getElementById(plates[t] + "").dataset.num;

      document.getElementById('plated_0').innerHTML += '<span class="sing_plate ' + klass + '">' + plates[t] + '</span>';
    }

    document.getElementById('bar').innerHTML = document.getElementById('barbell').value;

    output.style.display = 'block';

    // console.log("plates: " + plates);
  }
}

document.getElementById('calc').addEventListener('click', getWeight);


document.getElementById('reset').addEventListener('click', function() {
  document.getElementById('weight').value = null;
  document.getElementById('barbell').value = null;
  document.getElementById('output').style.display = 'none';
})
