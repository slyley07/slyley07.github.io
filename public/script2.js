var all_cards = [
  "one_a",
  "two",
  "three",
  "four",
  "five",
  "six",
  "info_one",
  "info_two",
  "info_three",
  "projects",
  "contacts"
]

function setCookie(cname, cvalue, exdays) {
  console.log(cname);
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length,c.length);
    }
  }
  return "";
}

function checkCookie() {
  var user_name = getCookie("user_name");
  if (user_name != "") {
    console.log('user_name');
    document.getElementById('one_a').style.display = "none";
    document.getElementById('one_b').style.display = 'block';
    document.getElementById('user_name_a').innerHTML = user_name;
  }
}

checkCookie();

function deleteCookie() {
  document.cookie = "user_name=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
}

document.getElementById('deleteCookie').addEventListener('click', deleteCookie)

document.getElementById('user_name_submit').addEventListener('click', function() {
  var user_name = document.getElementById('user_name_input').value;
  console.log(user_name);

  setCookie("user_name", user_name, 365);
  console.log(document.cookie);

  document.getElementById('user_name_b').innerHTML = user_name;

  show_next_card('one_a');
});

function show_next_card(current_card) {
  var curr_index = all_cards.indexOf(current_card);

  console.log(current_card);

  var next_card = all_cards[curr_index + 1]

  document.getElementById(current_card).style.display = 'none';

  document.getElementById(next_card).style.display = 'block';
}

// document.getElementById('next_two').addEventListener('click', function() {
//   show_next_card
// })

var bg = {lat: 39.7140142, lng: -86.1002435}
var purdue = {lat: 40.4237054, lng: -86.9233833};

var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: bg
  });

  function setMarker(location, time) {
    setInterval(
      function() {
      var marker = new google.maps.Marker({
        position: location,
        map: map
      })
    }
    , time);
  }

  setMarker(bg, 6000);
  setMarker(purdue, 15000);
}



 document.getElementById('add_bg').addEventListener('click', function() {
   addMarker(bg);
 })

 document.getElementById('add_purdue').addEventListener('click', function() {
   addMarker(purdue);
 });

function initialize() {
  initMap();
  console.log("map init");
}
