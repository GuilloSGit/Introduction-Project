class View {
    constructor(parent) {
        this.Parent = parent;
    }

    get Data() {
        return this.Parent.Data;
    }

    get Logic() {
        return this.Parent.Logic;
    }

    get Structure() {
        return this.Parent.Structure;
    }
}