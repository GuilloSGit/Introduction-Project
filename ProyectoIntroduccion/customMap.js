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
        let element;

        for (let id in this._markers) {
            element = this._markers[id];
            if (bounds.contains(element.marker.getPosition())) {
                out.push(element);
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

    _createPoint(point) {
        const id = point.lat + ":" + point.lng;
        let marker = this._markers[id];

        if (!marker) {
            marker = new google.maps.Marker({
                position: {
                    lat: point.lat,
                    lng: point.lng,
                },
                map: null,
                title: point.title,
            });
        }
        
        this._markers[id] = { marker: marker, record: point };

        return marker;
    }

    _createInfoWindow(point) {
        const infoWindow = new google.maps.InfoWindow({
            content: (
                `<h3>${point.title}</h3>` +
                `<div class="point-description">` +
                `<p><b>Lat:</b> ${point.lat}</p>` +
                `<p><b>Long:</b> ${point.lng}</p>` +
                `<p class="item-info"><b>Info:</b> ${point.description}</p>` +
                `</div>` +
                `<div class="point-image">` +
                `<img src="${point.image}" class="point-image">`
            ),
        });

        return infoWindow;
    }

}