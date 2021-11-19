// setting the map options

let nskLatLong = { lat: 6.8578, lng: 7.3958 };

let mapOptions = {
  center: nskLatLong,
  zoom: 7,
  mapTypeId: google.maps.MapTypeId.ROADMAP,
};

// create map
let map = new google.maps.Map(document.getElementById("map"), mapOptions);
