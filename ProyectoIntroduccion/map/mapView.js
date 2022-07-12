class MapView {
    constructor(parent) {
        this.Parent = parent;
        this._map = undefined;
    }

    get Data() {
        return this.Parent.Data;
    }

    get Structure() {
        return this.Parent.Structure;
    }

    get Logic() {
        return this.Parent.Logic;
    }

}