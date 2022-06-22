// Initialize and add the map
class CustomMap {
    constructor() {
        this._map = this._create();
    }

    _create() {
        const myLatLng = { lat: -36.000, lng: -63.000 };

        return new google.maps.Map(document.getElementById("map"), {
            zoom: 4,
            center: myLatLng,
            mapTypeId: "terrain",
            maxZoom: 9,
            minZoom: 4,
        });
    }

    showPoints(points) {
        for (let point of points) {
            this._showPoint(point);
        }
    }

    _showPoint(point) {
        const marker = new google.maps.Marker({
            position: {
                lat: point.lat,
                lng: point.lng
            },
            map: this._map,
            title: point.title,
        });

        /* Abre un diálogo */
        const infoWindow = new google.maps.InfoWindow({
            content: `<div class="map-dialog"><h3 class="map-dialog-title">${point.title}</h3>
            <img src="${point.image}" alt="${point.title}" class="map-point-image">
            <p class="map-image-description">${point.description}</p>
            </div>`,
        });

        /* Escucha el evento clic para abrir el diálogo 💬 */
        /* Close dialog if click outside the dialog */
        google.maps.event.addListener(marker, "click", () => {
            infoWindow.open(this._map, marker);
        });
    }

    /* Crea cada instancia de Marcador 🚩 */
    _showMarker(point) {
        const marker = new google.maps.Marker({
            position: point,
            map: this._map,
        });

        for (let point of points) {
            this._showPoint(point);
        }
    }

    // _showPolyline(points) {
    //     const polyline = new google.maps.Polyline({
    //         path: points,
    //         geodesic: true,
    //         strokeColor: "#FF0000",
    //         strokeOpacity: 1.0,
    //         strokeWeight: 2,
    //     });

    //     polyline.setMap(this._map);
    // }

    // _showPolygon(points) {
    //     const polygon = new google.maps.Polygon({
    //         paths: points,
    //         strokeColor: "#FF0000",
    //         strokeOpacity: 0.8,
    //         strokeWeight: 2,
    //         fillColor: "#FF0000",
    //         fillOpacity: 0.35,
    //     });
    //     polygon.setMap(this._map);
    // }
}