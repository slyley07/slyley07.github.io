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

  output.innerHTML = '<p><span id="plated_0"></span><span class="bar"></span> <span id="plated_1"></span></p>';

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

  weight = weight - bar_weight;

  weight = weight / 2;
  if (weight > 0) {
    calc(weight);
  } else if (weight === 0) {

    output.innerHTML = '<p class="error">Just use the bar</p>'
    output.style.display = 'block';
  } else {
    output.innerHTML = "<p class='error'>You can't have less weight than the bar!</p>"
    output.style.display = 'block';
  }
}


function calc(target_weight) {
  // console.log("before if weight: " + target_weight);

  if (target_weight >= checked_plates[b]) {
    // console.log("plate: " + checked_plates[b]);
    target_weight = target_weight - checked_plates[b];
    plates.push(checked_plates[b]);
    // console.log(target_weight >= checked_plates[b]);
    if (target_weight >= checked_plates[b]) {
      // console.log(b);
      calc(target_weight);
    } else {
      // console.log("weight is not more than current plate: " + target_weight);
      b++;
      calc(target_weight);
      return;
    }
  } else if (target_weight > 0) {
    if (!checked_plates.includes(2.5) && target_weight % 1 > 0) {
      output.innerHTML = '<p class="error">Cannot plate</p>'
      output.style.display = 'block';

      return;
    } else {
      b++;
      calc(target_weight);
      return;
    }
  } else {
    for (var w = 0; w < plates.length; w++) {
      var klass = document.getElementById(plates[w] + "").dataset.num;
      document.getElementById('plated_1').innerHTML += '<span class="sing_plate ' + klass + '">' + plates[w] + '</span>';
    }
    //
    plates.reverse();

    for (var t = 0; t < plates.length; t++) {
      var klass = document.getElementById(plates[t] + "").dataset.num;

      document.getElementById('plated_0').innerHTML += '<span class="sing_plate ' + klass + '">' + plates[t] + '</span>';
    }

    output.style.display = 'block';

    console.log("plates: " + plates);
  }
  console.log(b);
}

document.getElementById('calc').addEventListener('click', getWeight);
