var plates = [];
var checked_plates = [];


var b = 0;

var possible_plates = ['2.5','5','10','25','35','45','55'];

var output = document.getElementById('output');

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
