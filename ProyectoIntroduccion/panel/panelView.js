class PanelView extends View {
    constructor() {
        this._panel = undefined;
        this._filterValue = null;
    }

    get Structure() {
        return this.Parent.Structure;
    }

    setFilterValue(value) {
        this._filterValue = value;
    }

    create(areaId) {
        if (this._panel === undefined) {
            this._create(areaId);
        }
        this._addElements();
    }

    _create(id) {
        const node = document.getElementById(id);
        node.innerHTML = this.Structure.getHtmlContainer(id + "List");
        this._panel = document.getElementById(id + "List");
    }

    _addElements() {
        for (let element of this.Data.getElements()) {
            element.create();
        }
    }

    refresh() {
        const result = this.Logic._boundsChanged(this.Parent.mapFacade.map);
    }

    show() {
        this.renderElements();
    }

    renderElements() {
        for (let element of this.Data.getElements()) {
            if (element.isFiltered(this._filterValue)) {
                element.show(this._panel);
            }
        }

        this._updateTitle();
    }

    hide() {
        this.clearElements();
        this._panel.style.display = "none";
    }

    clearElements() {
        for (let element of this.Data.getElements()) {
            element.hide();
        }
    }

    refresh() {
        this.clearElements();
        this.renderElements();
    }

    _updateTitle() {
        const titleSection = document.getElementsByClassName('panel-title')[0];
        titleSection.innerHTML = this.Structure.getHtmlTotals();
    }
}
