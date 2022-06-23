// Initialize and add the map
class CustomMap {
    constructor() {
        this._map = this._create();
        this._markers = {};
    }

    _create() {
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 4,
            center: { lat: -36.000, lng: -62.000 },
            mapTypeId: "terrain",
            maxZoom: 15,
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
                out.push(id);
            }
        }
        return out;
    }

    getPointById(id) {
        return this._markers[id];
    }

    showPoints(points) {
        for (let point of points) {
            this._showPoint(point);
        }
    }

    showPolygons(polygons) {
        for (let polygon of polygons) {
            this._showPolygon(polygon);
        }
    }

    _showPoint(point) {
        const marker = this._createPoint(point);
        marker.setMap(this._map);
    }

    _createPoint(point) {
        const id = this.createPointId(point);
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

        this._markers[id] = marker;

        return marker;
    }

    createPointId(point) {
        return point.lat + ":" + point.lng;
    }

    _createPolygon(polygon) {
        const polygonItem = new google.maps.Polygon({
            paths:          [ polygon.paths ],
            strokeColor:    polygon.strokeColor,
            strokeOpacity:  polygon.strokeOpacity,
            strokeWeight:   polygon.strokeWeight,
            fillColor:      polygon.fillColor,
            fillOpacity:    polygon.fillOpacity,
        });
        return polygonItem;
    }

    _showPolygon() {
        const polygon = this._createPolygon(polygon);
        polygon.setMap(this._map);
    }

}