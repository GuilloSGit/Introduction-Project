class PanelView extends View {
    constructor(parent) {
        super(parent);
        this._panel = undefined;
        this._filter = undefined;
        this._filterValue = null;
    }

    get Filter() {
        return this.Parent.Filter;
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
        node.innerHTML = this.Structure.getHtmlContainer(id);
        this._panel = document.getElementById(id + "List");
        this._filter = document.getElementById(id + "Filter");
    }

    _addElements() {
        for (let element of this.Data.getElements()) {
            element.create();
        }
    }

    start() {
        this.Filter.create();
        this.Filter.addCondition((element, value) => element.isFiltered(value));

        this.show();
    }

    show() {
        this.renderElements();
    }

    renderElements() {
        const elements = this.Filter.apply(this.Data.getElements());

        for (let element of elements) {
            element.show(this._panel);
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

    getAreaFilters() {
        return this._filter;
    }
}
