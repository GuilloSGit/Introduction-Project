class PanelView {
    constructor(parent) {
        this.Parent = parent;
        this._panel = undefined;
    }

    clickButton() {
        this.Parent.mapFacade.show();
    }

    get Data() {
        return this.Parent.Data;
    }

    get Structure() {
        return this.Parent.Structure;
    }

    get Logic() {
        return this.Parent.Logic;
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
           // if (element.isFiltered(this._filterValue)) {
                element.show(this._panel);
           // }
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

    _updateTitle() {
        const titleSection = document.getElementsByClassName('panel-title')[0];
        titleSection.innerHTML = this.Structure.getHtmlTotals();
    }
}
