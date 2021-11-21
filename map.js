let geocoder;
// call action button

function initMap() {
  // setting the map options

  let nskLatLong = { lat: 6.8578, lng: 7.3958 };

  let mapOptions = {
    center: nskLatLong,
    zoom: 7,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  };

  // create map
  let map = new google.maps.Map(document.getElementById("map"), mapOptions);

  // listen for click
  google.maps.event.addEventListener(map, "click", (event) => {
    // add marker
    addMarker({ location: event.latlng });
  });

  // make an array for the markers
  let markerArray = [
    { location: { lat: 6.864472, lng: 7.414 }, imageIcon: `<i class="fa-solid fa-flag"></i>` },
    { location: { lat: 6.773175, lng: 7.433683 }, imageIcon: `<i class="fa-solid fa-flag"></i>` },
  ];

  // loop to add marker
  for (let i = 0; i < markerArray.length; i++) {
    addMarker(markerArray[i]);
  }

  // add marker
  function addMarker(value) {
    const marker = new google.maps.Marker({
      position: value.location,
      map: map,
    });

    // check for custom icon
    if (value.imageIcon) {
      // set icon
      marker.setIcon(value.imageIcon);
    }
  }
}
