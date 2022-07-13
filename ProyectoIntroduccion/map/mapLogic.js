class MapLogic extends Logic {
    constructor() {}

    create(areaId) {
        this._map = new google.maps.Map(document.getElementById(areaId), {
            zoom: 4,
            center: { lat: -36.000, lng: -62.000 },
            mapTypeId: "terrain",
            maxZoom: 15,
            minZoom: 4,
        });

        this._mapEvents();
    }

    _mapEvents() {
        let bounds = -1;
        let zoom = -1;

        this._map.addListener("idle", () => {
            if (bounds + zoom > 1) {
                bounds = 1;
                zoom = 1;
                EventsListener.trigger("bounds-changed", this);
            }
        });

        this._map.addListener("bounds_changed", () => { bounds += 1; });
        this._map.addListener("zoom_changed", () => { zoom += 1; });
    }

    getMap() {
        return this._map;
    }

    getElementsInBounds() {
        let out = {};

        for (let layer of this.Data.getLayers()) {
            out[layer.type] = layer.getElementsInBounds(this._map.getBounds());
        }

        return out;
    }

}