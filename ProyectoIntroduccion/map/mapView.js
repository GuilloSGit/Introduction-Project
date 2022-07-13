class MapView extends View {
    addLayer(layer) {
        layer.setMap(this.Logic.getMap());
        this.Data.addLayer(layer);
    }
}