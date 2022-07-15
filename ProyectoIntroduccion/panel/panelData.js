class PanelData extends Data {
	constructor(parent) {
		super(parent);
		this._markers = [];
		this._polygons = [];
	}

	initialize() {
		this._markers = this._preparePanelElements(POINTS, CustomPanelMarker);
		this._polygons = this._preparePanelElements(POLYGONS, CustomPanelPolygon);
	}

	getMarkers() {
       return this._markers;
    }

    getPolygons() {
    	return this._polygons;
    }

    _preparePanelElements(elements, clazz) {
        const out = [];

        for (let element of elements) {
            out.push(new clazz(element));
        }

        return out; 
    }
}