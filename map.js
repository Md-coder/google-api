let geocoder;
// input value

// create a listener
let search = document.getElementById("button");

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

  search.addEventListener("click", () => {
    let latVal = document.getElementById("latitudeVal").value;
    let longVal = document.getElementById("longVal").value;
    let sample = document.getElementById("sampleVal").value;

    // create new marker
    let newMarker = {
      location: { lat: parseFloat(latVal), lng: parseFloat(longVal) },
      imageIcon: "https://img.icons8.com/nolan/1x/marker.png",
      content: `<p>${sample}</p>`,
    };

    //  create a function for adding new markerArray

    // make an array for the markers
    let markerArray = [
      // {
      //   location: { lat: 6.864472, lng: 7.414 },
      //   imageIcon: "https://img.icons8.com/nolan/1x/marker.png",
      // },
      // {
      //   location: { lat: 6.773175, lng: 7.433683 },
      //   imageIcon: "https://img.icons8.com/nolan/1x/marker.png",
      // },
      // {
      //   location: { lat: 6.871623, lng: 7.419083 },
      //   imageIcon: "https://img.icons8.com/nolan/1x/marker.png",
      // },
    ];
    // push the new marker into the array
    markerArray.push(newMarker);
    console.log(markerArray);

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

      if (value.content) {
        var infoWindow = new google.maps.InfoWindow({
          content: value.content,
        });

        infoWindow.open(map, marker);
      }
    }

    // listen for click
    google.maps.event.addListener(map, "click", (event) => {
      // Add marker
      addMarker({ location: event.latLng });
    });
  });
}
