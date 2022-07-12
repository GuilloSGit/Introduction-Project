class Module {
    constructor(name) {
        this.name = name
        this._link("Logic");
        this._link("View");
        this._link("Data");
        this._link("Structure");

        this.initialize();
        this.subscriptions();
        this.ready();
    }

    _link(className) {
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
            () => this.getFacade()
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