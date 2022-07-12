class MapLogic {
    constructor(parent) {
        this.Parent = parent;
        this._map = undefined; /* ????????? */
    }

    getElementsInBounds(bounds) {
        let out = {};
        for (let layer of this.Parent.Data.getElements()) {
            out[layer.type] = layer.getElementsInBounds(bounds);
        }
        return out;
    }

}