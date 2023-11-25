//GOOGLE MAPS API JS

let map;

async function initMap() {

  const { Map } = await google.maps.importLibrary("maps");

  const location = { lat: -8.051638511866559, lng: -34.90323987593835 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: location,
  });
  new google.maps.Marker({
    position: location,
    map: map,
  });
}

initMap();