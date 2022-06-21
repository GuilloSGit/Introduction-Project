// Initialize and add the map
class CustomMap {
    constructor() {
        this._map = this._create();
    }

    _create() {
        const myLatLng = { lat: -36.000, lng: -63.000 };

        return new google.maps.Map(document.getElementById("map"), {
            zoom: 5,
            center: myLatLng,
            mapTypeId: "terrain",
        });
    }

    showPoints(points) {
        for (let point of points) {
            this._showPoint(point);
        }
    }

    _showPoint(point) {
        //this._map
    }
}