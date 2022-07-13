class MapView {
    constructor() {
        this._layers = [];
    }

    addLayer(layer) {
        layer.setMap(this.Logic.getMap());
        this.Data.addLayer(layer);
    }
}