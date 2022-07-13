class MapModule extends Module {
    constructor() {
        super("Map");
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