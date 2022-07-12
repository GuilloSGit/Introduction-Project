class MapView {
    constructor(parent) {
        this.Parent = parent;
        this._layers = [];
    }

    get Logic() {
        return this.Parent.Logic;
    }

    get Data() {
        return this.Parent.Data;
    }

    addLayer(layer) {
        layer.setMap(this.Logic.getMap());
        this.Data.addLayer(layer);
    }
}