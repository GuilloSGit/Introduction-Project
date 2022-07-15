class PanelModule extends Module {
    constructor() {
        super("Panel");
        this.link("Filter");
    }

    initialize() {
        this.mapFacade = {
            show: () => null,
            hide: () => null
        };
    }

    subscriptions() {
        EventsListener.subscribe(
            "Application.start",
            () => {
                this.Logic.start();
            }
        );

        EventsListener.subscribe(
            "Map.start",
            (facade) => {
                this.mapFacade = facade;
            }
        );

        EventsListener.subscribe(
            "bounds-changed",
            () => { this.View.refresh(); }
        );
    }

    addElements(elements) {
        this.Data.addElements(elements);
    }

    create(areaId) {
        this._areaId = areaId;
        this.View.create(this._areaId);
    }

    getFacade() {
        const out = super.getFacade();
        out.addElements = (elements) => this.addElements(elements);
        out.addFilter = (condition) => this.Filter.addCondition(condition);
        return out;
    }
}