class PanelModule {
    constructor(areaId) {
        this._areaId = areaId;

        this._link("Logic", PanelLogic);
        this._link("View", PanelView);
        this._link("Data", PanelData);
        this._link("Structure", PanelStructure);

        this.mapFacade = {
            show: () => null,
            hide: () => null
        };

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
            (facade) => {
                this.mapFacade = facade;
                () => this.View.show()
            }
        );

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
        this.Data.addElements(elements);
    }

    create() {
        this.View.create(this._areaId);
    }

    show() {
        this.View.show();
    }

    hide() {
        this.View.hide();
    }

    getFacade() {
        return {
            addElements: (elements) => this.addElements(elements),
            show: () => this.show(),
            hide: () => this.hide(),
        }
    }
}