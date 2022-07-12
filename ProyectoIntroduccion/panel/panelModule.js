class PanelModule extends Module {
    constructor(areaId) {
        super("Panel");
        this._areaId = areaId;
    }

    initialize() {
        this.mapFacade = {
            show: () => null,
            hide: () => null
        };
    }

    subscriptions() {
        EventsListener.subscribe(
            "Map.ready",
            (facade) => {
                this.mapFacade = facade;
                () => this.View.show()
            }
        );

        EventsListener.subscribe(
            "bounds-changed",
            (map) => { this.Logic.boundsChanged(map); }
        );

        EventsListener.subscribe(
            "filter-applied",
            (value) => { this.Logic.applyFilter(value); } 
        );
    }

    addElements(elements) {
        this.Data.addElements(elements);
    }

    create() {
        this.View.create(this._areaId);
    }

    getFacade() {
        const out = super.getFacade();
        out.addElements = (elements) => this.addElements(elements);
        return out;
    }
}