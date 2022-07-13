class Logic {
    constructor(parent) {
        this.Parent = parent;
    }

    get Data() {
        return this.Parent.Data;
    }
}