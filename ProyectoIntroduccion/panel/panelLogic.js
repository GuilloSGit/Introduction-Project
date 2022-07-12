class PanelLogic {
    constructor(parent) {
        this.Parent = parent;
    }

    get View() {
        return this.Parent.View;
    }

    get Data() {
        return this.Parent.Data;
    }

    applyFilter(value) {
        this.View.setFilterValue(value);
        this.View.refresh();
    }

    boundsChanged(map) {
        EventsListener.trigger("filter-applied", "");
        const layers = map.getElementsInBounds();

        for (let name in layers) {
            this._filterElementsInMap(layers[name], name);
        }

        this.View.refresh();
    }

    isFiltered() {
        return true;
    }

    _filterElementsInMap(list, type) {
        for (let element of this.Data.getElements()) {
            if (element.type == type) {
                element.inmap = (list.find(id => id == element.record.id) != null);
            }
        }
    }
}