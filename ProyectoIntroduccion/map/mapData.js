class MapData {
    constructor(parent) {
        this.Parent = parent;
        this._elements = [];
    }

    getElements() {
        this._elements = POINTS.concat(POLYGONS);
        return this._elements;
    }

    addElements(elements) {
        this._elements = this._elements.concat(elements);
    }
}