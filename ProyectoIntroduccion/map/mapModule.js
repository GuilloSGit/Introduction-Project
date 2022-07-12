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

        this.running();
    }

    _link(name, instance) {
        this[name] = new instance(this);
    }

    running() {
        EventsListener.trigger(
            "map.ready",
            () => this.getFacade()
        );
    }

    subscriptions() {

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
            hide: () => this.View.hide()
        }
    }
}