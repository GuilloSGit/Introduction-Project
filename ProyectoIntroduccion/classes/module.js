class Module {
    constructor(name) {
        this.name = name
        this.link("Logic");
        this.link("View");
        this.link("Data");
        this.link("Structure");

        this.initialize();
        this.subscriptions();
        this.ready();
    }

    link(className) {
        try {
            this[className] = eval(`new ${ this.name + className }(this)`);
        }
        catch(e) {
            console.log("No se pudo instanciar " + this.name + className);
        }
    }

    ready() {
        EventsListener.trigger(
            this.name + ".ready",
            this.getFacade()
        );
    }

    start() {
        EventsListener.trigger(
            this.name + ".start",
            this.getFacade()
        );
    }

    show() {
        this.View.show();
    }

    hide() {
        this.View.hide();
    }

    getFacade() {
        return {
            show: () => this.show(),
            hide: () => this.hide(),
        }
    }

    //Se sobreescriben
    subscriptions() {}
    initialize() {}
}