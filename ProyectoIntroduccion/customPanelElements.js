class CustomPanelElements {
    constructor(map) {
        this._initialize();
        this._panel = this._create();
        this._records = [];
        this.map = map;
    }

    _initialize() {
        EventsListener.subscribe(
            "bounds-changed",
            (map) => { this._boundsChanged(map); }
        );
    }

    _showPoints() { }

    _boundsChanged(map) {
        const layers = map.getElementsInBounds();
        let points = [];
        let polygons = [];

        for (let name in layers) {
            switch (name) {
                case "marker": points = this._findPoints(layers[name]); break;
                case "polygon": polygons = this._findPolygons(layers[name]); break;
                default: break;
            }
        }

        this.showPoints(points, polygons);
    }
}

class CustomPanelTitle extends CustomPanelElements {

    _getTitle() {
        return document.getElementById("panel").firstElementChild;
    }

    _showTitle(message) {
        this._getTitle().innerHTML = message;
    }
}

class CustomPanelMarker extends CustomPanelElements {
    constructor() {

    }

    _showPoints(){}

}

class CustomPanelPolygon extends CustomPanelElements {
    constructor() {

    }

    _showPoints(){}

}

