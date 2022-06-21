// Initialize and add the map
function initMap() {
    const myLatLng = { lat: -36.000, lng: -63.000 };

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 5,
        center: myLatLng,
        mapTypeId: "terrain",
    });
}

window.initMap = initMap;