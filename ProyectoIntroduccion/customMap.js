// Initialize and add the map
class CustomMap {
    constructor() {
        this._map = this._create();
        this._markers = {};
    }

    _create() {
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 4,
            center: { lat: -36.000, lng: -63.000 },
            mapTypeId: "terrain",
            maxZoom: 9,
            minZoom: 4,
        });

        this._mapEvents(map);

        return map;
    }

    _mapEvents(map) {
        let bounds = -1;
        let zoom = -1;

        map.addListener("idle", () => { 
            if (bounds + zoom > 1) {
                bounds = 1;
                zoom = 1;
                EventsListener.trigger("bounds-changed", this);
            }
        });

        map.addListener("bounds_changed", () => { bounds += 1; });
        map.addListener("zoom_changed", () => { zoom += 1; });
    }

    getPointsInBounds() {
        const out = [];
        const bounds = this._map.getBounds();
        let marker;

        for (let id in this._markers) {
            marker = this._markers[id];
            if (bounds.contains(marker.getPosition())) {
                out.push(marker);
            }
        }

        return out;
    }

    showPoints(points) {
        for (let point of points) {
            this._showPoint(point);
        }
    }

    _showPoint(point) {
        const marker = this._createPoint(point);
        marker.setMap(this._map);
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

        /* Abre un diálogo en el mapa 🗺️ */
        const infoWindow = new google.maps.InfoWindow({
            content: `<div class="map-dialog"><h3 class="map-dialog-title">${point.title}</h3>
            <img src="${point.image}" alt="${point.title}" class="map-point-image">
            <p class="map-image-description">${point.description}</p>
            </div>`,
        });

        google.maps.event.addListener(marker, "click", () => {
            infoWindow.open(this._map, marker);
        });

    }

    _createPoint(point) {
        const id = point.lat + ":" + point.lng;
        let marker = this._markers[id];
 
        if (!marker) {
            marker = new google.maps.Marker({
                position: {
                    lat: point.lat,
                    lng: point.lng
                },
                map: null,
                title: point.title,
            });
        }

        this._markers[id] = marker;

        return marker;
    }

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
}