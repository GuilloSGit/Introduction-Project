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

    applyFilter(value) {
        this._filterValue = value;
        this.clearElements();
        this.renderElements();
    }

    _boundsChanged(map) {
        const layers = map.getElementsInBounds();

        for (let name in layers) {
            this._filterElementsInMap(layers[name], name);
        }

        this.clearElements();
        this.renderElements();
        this.setTitle();
        
    }

    _filterElementsInMap(list, type) {
        for (let element of this._elements) {
            if (element.type == type) {
                element.inmap = (list.find(id => id == element.record.id) != null);
            }
        }
    }

    setTitle() {
        const titleSection = document.getElementsByClassName('panel-title')[0];
        titleSection.innerHTML = "Total de registros: " +
            `${POINTS.length + POLYGONS.length}<br />` +
            "En pantalla: " +
            `Marcadores  / ` +
            `Áreas `;
    }

    
}
/*

    _filter(records) {
        const list = this._getList();
        list.innerHTML = "";
        const search = this._getSearchValue();
        let result = [
            ...POINTS,
            ...POLYGONS
        ];
        if (search !== "") {
            result = result.filter(record => {
                result = record.title.toLowerCase().includes(search.toLowerCase()) || record.description.toLowerCase().includes(search.toLowerCase()) || record.id.toLowerCase().includes(search.toLowerCase());
                return result;
            });
        }
        const answer = document.createElement('p');
        answer.innerHTML = `Encontrados: ${result.length}`;
        list.appendChild(answer);
        result.map(record => {
            this._fillElement(list, record);
        });
    }

*/