class PanelLogic extends Logic {
    applyFilter(value) {
        this.View.setFilterValue(value);
        this.View.refresh();
    }

    start() {
        const panel = Main.PanelModule;

        const markers = this._preparePanelElements(POINTS, CustomPanelMarker);
        panel.addElements(markers);

        const polygons = this._preparePanelElements(POLYGONS, CustomPanelPolygon);
        panel.addElements(polygons);

        panel.create("panel");
        panel.show();
    }

    _preparePanelElements(elements, clazz) {
        const out = [];

        for (let element of elements) {
            out.push(new clazz(element));
        }

        return out; 
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