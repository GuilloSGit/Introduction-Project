class PanelLogic extends Logic {
    get Filter() {
        return this.Parent.Filter;
    }

    start() {
        this.Data.initialize();
        this._populate();
        this.View.start();
        this.Parent.start();
    }

    _populate() {
        const panel = Main.PanelModule;
        panel.addElements(this.Data.getMarkers());
        panel.addElements(this.Data.getPolygons());
        panel.create("panel");
        panel.show();
    }
}