// Initialize and add the map
class CustomMap {
    constructor() {
        this._map = this._create();
        this._layers = [];
    }

    getMap() {
        return this._map;
    }

    addLayer(layer) {
        layer.setMap(this._map);
        this._layers.push(layer);
    }

    _create() {
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 4,
            center: { lat: -36.000, lng: -62.000 },
            mapTypeId: "terrain",
            maxZoom: 15,
            minZoom: 4,
        });

        this._mapEvents(map);

        return map;
    }

    _mapEvents(map) {
        let bounds = -1;
        let zoom = -1;

        map.addListener("idle", () => {
            if (bounds + zoom > 1) {
                bounds = 1;
                zoom = 1;
                EventsListener.trigger("bounds-changed", this);
            }
        });

        map.addListener("bounds_changed", () => { bounds += 1; });
        map.addListener("zoom_changed", () => { zoom += 1; });
        
    }

    getElementsInBounds() {
        let out = {};
        const bounds = this._map.getBounds();

        for (let layer of this._layers) {
            out[layer.type] = layer.getElementsInBounds(bounds);
        }
    
        return out;
    }
}