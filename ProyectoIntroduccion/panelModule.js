class Panel {
    constructor() {
        this.mapFacade = {
            show: () => null,
            hide: () => null
        };

        this._link("Logic", "PanelLogic");
        this._link("View", "PanelView");
        this._link("Data", "PanelData");
        this._link("Structure", "PanelStructure");
        this._link("Service", "PanelService");

        this.ready();
    }

    _link(name, instance) {
        this[name] = new instance(this);
    }

    ready() {
        EventsListener.trigger(
            "panel.ready",
            () => this.getFacade()
        );
    }

    subscriptions() {
        EventsListener.subscribe(
            "map.ready",
            (facade) => this.mapFacade = facade
        );

        EventsListener.subscribe(
            "map.ready",
            () => this.View.show()
        );
    }

    getFacade() {
        return {
            show: () => this.View.show(),
            hide: () => this.View.hide(),
        }
    }
    
    create() {
        this.Logic.create();
        this.View.create();
    }
}

class PanelLogic {
    constructor(parent) {
        this.Parent = parent;
    }

    get View() {
        return this.Parent.View;
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
        EventsListener.trigger("filter-applied", "");
        const layers = map.getElementsInBounds();

        for (let name in layers) {
            this._filterElementsInMap(layers[name], name);
        }

        this.clearElements();
        this.renderElements();
        this.setTitle();

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

class PanelStructure {
    constructor(parent) {
        this.Parent = parent;
    }

    renderElements() {
        this.Parent.View.renderElements();
    }

    clearElements() {
        this.Parent.View.clearElements();
    }
}

class PanelView {
    constructor(parent) {
        this.Parent = parent;
    }

    clickButton() {
        this.Parent.mapFacade.show();
    }

    get Logic() {
        return this.Parent.Logic;
    }

    refresh() {
        const result = this.Logic._boundsChanged(this.Parent.mapFacade.map);
    }

    show() { }

    hide() { }

    setTitle() {
        const titleSection = document.getElementsByClassName('panel-title')[0];
        titleSection.innerHTML = "Total de registros: " +
            `${POINTS.length + POLYGONS.length}<br />` +
            "En pantalla: " +
            `Marcadores  / ` +
            `Áreas `;
    }
}

class PanelData {

}

class PanelService {

}