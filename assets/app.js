// 59.9387942, 30.3230833 — address 
// https://developers.google.com/maps/documentation/javascript
var map;
var initialize = function initialize() {
  map = new google.maps.Map(document.getElementById('map-canvas'), {
    zoom: 17,
    center: {lat: 59.9391942, lng: 30.3200833},
    disableDefaultUI: true
  });
  
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(59.9387942, 30.3230833),
    map: map,
    icon: 'img/map-bubble.png'
  });
};

google.maps.event.addDomListener(window, 'load', initialize);

document.addEventListener('DOMContentLoaded', function () {   
  var feedback = document.getElementById('feedback');
  var modal = document.querySelector(".modal");
  var close = document.querySelector(".modal-content-close");
  
  feedback.addEventListener('click', function (event) {
    event.preventDefault();
    modal.classList.add('modal-show');
  });
  
  close.addEventListener('click', function(event) {
    event.preventDefault();
    modal.classList.remove('modal-show');
  });
  
}, false);