class PanelData {
	constructor(parent) {
		this.Parent = parent;
		this._elements = [];
	}

	getElements() {
		return this._elements;
	}

	addElements(elements) {
		this._elements = this._elements.concat(elements);
	}
}