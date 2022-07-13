class MapData extends Data {
    addLayer(layer) {
        this.addElements(layer);
    }

    getLayers() {
        return this.getElements();
    }
}