class MapModule {
    constructor() {
        this._link("Logic", MapLogic);
        this._link("View", MapView);
        this._link("Data", MapData);
        this._link("Structure", MapStructure);

        this.panelFacade = {
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
            "map.ready",
            () => this.getFacade()
        );
    }

    addLayer(layer) {
        this.View.addLayer(layer);
    }

    create(areaId) {
        this.Logic.create(areaId);
    }

    show() {
        this.View.show();
    }

    hide() {
        this.View.hide();
    }

    getFacade() {
        return {
            show: () => this.View.show(),
            hide: () => this.View.hide(),
            getMap: () => this.Logic.getMap()
        }
    }
}