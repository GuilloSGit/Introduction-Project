class Data {
    constructor(parent, type) {
        this.Parent = parent;
        this._elements = [];
    }

    get Logic() {
        return this.Parent.Logic;
    }

    get View() {
        return this.Parent.View;
    }

    getElements() {
        return this._elements;
    }

    addElements(elements) {
        if (Array.isArray(elements)) {
            this._elements = this._elements.concat(elements);
        }
        else {
            this._elements.push(elements);
        }
    }
}