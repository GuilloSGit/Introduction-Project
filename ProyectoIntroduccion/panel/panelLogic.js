class PanelLogic {
    constructor(parent) {
        this.Parent = parent;
    }

    get View() {
        return this.Parent.View;
    }

    applyFilter(value) {
        this._filterValue = value;
        this.clearElements();
        this.renderElements();
    }

    _boundsChanged(map) {
        EventsListener.trigger("filter-applied", "");
        const layers = map.getElementsInBounds();

        for (let name in layers) {
            this._filterElementsInMap(layers[name], name);
        }

        this.clearElements();
        this.renderElements();
    }

    isFiltered() {
        return true;
    }

    _filterElementsInMap(list, type) {
        for (let element of this._elements) {
            if (element.type == type) {
                element.inmap = (list.find(id => id == element.record.id) != null);
            }
        }
    }
}