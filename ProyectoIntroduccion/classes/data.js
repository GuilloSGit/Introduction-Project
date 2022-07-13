class Data {
    constructor(parent) {
        this.Parent = parent;
        this._objects = objects;
    }

    getObjects() {
        return this._objects;
    }

    addObjects(objects) {
        this._objects = this._objects.concat(objects);
    }

    addObject(object) {
        this._objects.push(object);
    }
}