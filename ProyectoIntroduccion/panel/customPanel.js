class CustomPanel {
    constructor() {
        this._panel = this._create("panelList");
        this._elements = [];
        this._initialize();
    }

    _initialize() {
        EventsListener.subscribe(
            "bounds-changed",
            (map) => { this._boundsChanged(map); }
        );

        EventsListener.subscribe(
            "filter-applied",
            (value) => { this.applyFilter(value); }
        );
    }

    addElements(elements) {
        this._elements = this._elements.concat(elements);
    }

    _create(id) {
        const ul = document.createElement("ul");
        document.getElementById(id).appendChild(ul);

        return ul;
    }

    show() {
        this.renderElements();
    }

    renderElements() {
        for (let element of this._elements) {
            if (element.isFiltered(this._filterValue)) {
                element.show(this._panel);
            }
        }
    }

    hide() {
        this.clearElements();
        this._panel.style.display = "none";
    }

    clearElements() {
        for (let element of this._elements) {
            element.hide();
        }
    }

    create() {
        for (let element of this._elements) {
            element.create();
        }
    }
}