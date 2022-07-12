class MapData {
    constructor(parent) {
        this.Parent = parent;
        this._layers = [];
    }

    addLayer(layer) {
        this._layers.push(layer);
    }

    getLayers() {
        return this._layers;
    }
}