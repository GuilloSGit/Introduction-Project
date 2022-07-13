class PanelData extends Data {
	constructor() {
		this._elements = [];
	}

	getElements() {
		return this._elements;
	}

	addElements(elements) {
		this._elements = this._elements.concat(elements);
	}

}