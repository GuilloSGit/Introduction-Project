class MapModule extends Module {
    constructor() {
        super("Map");
        this._panelFacade = {
            addFilter: () => null
        }
    }

    initialize() {
        this.panelFacade = {
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
            "Panel.start",
            (facade) => {
                facade.addFilter(this.Logic.getFilterCondition());
            }
        );
    }

    addLayer(layer) {
        this.View.addLayer(layer);
    }

    create(areaId) {
        this.Logic.create(areaId);
    }

    getFacade() {
        const out = super.getFacade();
        out.getMap = () => this.Logic.getMap();
        return out;
    }
}