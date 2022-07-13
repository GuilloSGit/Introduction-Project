class MapData extends Data {
    constructor() {
        super("_layers");
        this._layers = [];
    }

    addLayer(layer) {
        this._layers.push(layer);
    }

    getLayers() {
        return this._layers;
    }
}