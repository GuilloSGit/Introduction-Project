class Map {
    constructor() {
        this.panelFacade = {
            show: () => null,
            hide: () => null,
            setTitle: () => null,
            isFiltered: () => null,
            refresh: () => null,
            create: () => null,
        }
        this.ready();
    }

    ready() {
        EventsListener.trigger(
            "map.ready",
            () => this.getFacade()
        );
    }

    subscriptions() {
        EventsListener.subscribe(
            "panel.ready",
            (facade) => this.panelFacade = facade
        );
    }

    getFacade() {
        return {
            show: () => this.View.show(),
            hide: () => this.View.hide()
        }
    }
}

class MapView {
    clickButton() {
        this.Parent.panelFacade.show();
    }

    show() { }

    hide() { }
}

class MapLogic {

}

class MapStructure {

}

class MapData {

}

class MapService {

}