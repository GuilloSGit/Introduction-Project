class MapLogic extends Logic {
    start() {
        EventsListener.subscribe(
            "google.ready",
            () => { 
                this._map();
            },
            {
                retroactie: true
            }
        );
    }

    _map() {
        const map = Main.MapModule;
        map.create("map");

        const markers = new CustomMapMarkers();
        map.addLayer(markers);
        markers.add(POINTS);
        markers.show();

        const polygons = new CustomMapPolygons();
        map.addLayer(polygons);
        polygons.add(POLYGONS);
        polygons.show();
    }

    create(areaId) {
        this._map = new google.maps.Map(document.getElementById(areaId), {
            zoom: 4,
            center: { lat: -36.000, lng: -62.000 },
            mapTypeId: "terrain",
            maxZoom: 15,
            minZoom: 4,
        });

        this._mapEvents();
        this.Parent.start();
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

    _getElementById(id) {
        let out;

        for (let layer of this.Data.getLayers()) {
            out = layer.getElementById(id);
            if (out != null) { return out; }
        }

        return null;
    }

    getFilterCondition() {
        return (panelElement) => {
            const element = this._getElementById(panelElement.record.id);
            return (
                element == null ?
                false :
                element.isInBounds(this._map.getBounds())
            );
        }
    }
}