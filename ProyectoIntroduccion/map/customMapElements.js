class CustomMapElements {
    constructor(map, type) {
        this.map = map;
        this.type = type;
        this._elements = {};
    }

    setMap(map) {
        this.map = map;
    }

    add(elements) {
        for (let attributes of elements) {
            this._create(attributes);
        }
    }

    _create(attributes) {
        const id = this.createId(attributes);
        if (!(id in this._elements)) {
            this._elements[id] = this.create(attributes);
        }
    }

    createId() { /* se sobreescribe */ }

    show() {
        for (let id in this._elements) {
            this._elements[id].show();
        }
    }

    hide() {
        for (let id in this._elements) {
            this._elements[id].hide();
        }
    }

    getElementsInBounds() { return []; }

    getElementById(id) {
        return this._elements[id];
    }
}

class CustomMapMarkers extends CustomMapElements {
    constructor(map) {
        super(map, "marker");
    }

    createId(attributes) {
        return attributes.id; //attributes.lat + ":" + attributes.lng;
    }

    create(attributes) {
        const marker = new CustomMapMarker(this.map);
        marker.create(attributes);
        return marker;
    }

    getElementsInBounds(bounds) {
        const out = [];

        for (let id in this._elements) {
            if (bounds.contains(this._elements[id].getPosition())) {
                out.push(id);
            }
        }

        return out;
    }
}

class CustomMapPolygons extends CustomMapElements {
    constructor(map) {
        super(map, "polygon");
    }

    createId(attributes) {
        return attributes.id;
    }

    create(attributes) {
        const polygon = new CustomMapPolygon(this.map);
        polygon.create(attributes);
        return polygon;
    }

    getElementsInBounds(bounds) {
        const out = [];

        for (let id in this._elements) {
            if (bounds.intersects(this._elements[id].getBounds())) {
                out.push(id);
            }
        }

        return out;
    }
}

class CustomMapElement {
    constructor(map) {
        this.map = map;
        this.instance = null;
    }

    create() { /* se sobreescribe */ }

    show() {
        this.instance.setMap(this.map);
    }

    hide() {
        this.instance.setMap(null);
    }

    isInBounds() {
        return true;
    }
}

class CustomMapMarker extends CustomMapElement {
    create(attributes) {
        this.instance = new google.maps.Marker({
            position: {
                lat: attributes.lat,
                lng: attributes.lng,
            },
            map: null,
            title: attributes.title,
        });
    }

    getPosition() {
        return this.instance.getPosition();
    }

    isInBounds(bounds) {
        return bounds.contains(this.getPosition());
    }
}

class CustomMapPolygon extends CustomMapElement {
    create(attributes) {
        this.instance = new google.maps.Polygon({
            paths: [...attributes.paths],
            strokeColor: attributes.strokeColor,
            strokeOpacity: attributes.strokeOpacity,
            strokeWeight: attributes.strokeWeight,
            fillColor: attributes.fillColor,
            fillOpacity: attributes.fillOpacity,
        });
    }

    getBounds() {
        const path = this.instance.getPath().getArray();
        const bounds = new google.maps.LatLngBounds();

        for (let point of path) {
            bounds.extend(point);
        }
        return bounds;
    }

    getPosition() {
        return this.instance.getCenter();
    }

    isInBounds(bounds) {
        return (bounds.intersects(this.getBounds()));
    }
}