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

    // applyFilter(value) {
    //     this._filterValue = value;
    //     this.clearElements();
    //     this.renderElements();
    // }

    // _boundsChanged(map) {
    //     EventsListener.trigger("filter-applied", "");
    //     const layers = map.getElementsInBounds();

    //     for (let name in layers) {
    //         this._filterElementsInMap(layers[name], name);
    //     }

    //     this.clearElements();
    //     this.renderElements();
    //     this.setTitle();
        
    // }

    // _filterElementsInMap(list, type) {
    //     for (let element of this._elements) {
    //         if (element.type == type) {
    //             element.inmap = (list.find(id => id == element.record.id) != null);
    //         }
    //     }
    // }

    // setTitle() {
    //     const titleSection = document.getElementsByClassName('panel-title')[0];
    //     titleSection.innerHTML = "Total de registros: " +
    //         `${POINTS.length + POLYGONS.length}<br />` +
    //         "En pantalla: " +
    //         `Marcadores  / ` +
    //         `Áreas `;
    // }

    
}