class CustomPanel {
    constructor() {
        this._initialize();
    }

    _initialize() {
        EventsListener.subscribe(
            "bounds-changed",
            (map) => { this._boundsChanged(map); }
        );
    }

    showPoints(points, polygons) {
        const list = document.getElementById("points");
        let count = 0;
        let li;
        
        list.innerHTML = "";
        
        for (let point of points) {
            if (this._filter(point)) {
                li = document.createElement('li');
                list.appendChild(li);
                this._fillElement(li, point);
                count += 1;
            }
        }

        for (let polygon of polygons) {
            if (this._filter(polygon)) {
                li = document.createElement('li');
                list.appendChild(li);
                this._fillElement(li, polygon);
                count += 1;
            }
        }

        this._showPanelMessage(`
        <b> Total</b>: ${POINTS.length + POLYGONS.length} registros<br/>
        <br/>
        <b>En pantalla</b>:<br/>
        ${points.length}
        ${points.length === 1 ? "punto marcado" : "puntos marcados"} <br/>
        ${polygons.length}
        ${polygons.length === 1 ? "área" : "áreas"}`);

    }

    _filter(element) {
        return true;
    }

    _showPanelMessage(message) {
        const list = document.getElementById("points");
        list.innerHTML = `<p>${message}</p>`;
    }

    _fillElement(li, element) {
        /* Crear un div para cada ítem */
        var div = document.createElement('div');
        div.className = 'point';
        div.innerHTML = (
            `<h3>${element.title}</h3>` +
            `<div class="point-description">` +
            `<p class="item-info"><b>Info:</b> ${element.description}</p>` +
            `</div>` +
            `<div class="point-image">` +
            `<img src="${element.image}" class="point-image">`
        );

        li.appendChild(div);
    }

    _boundsChanged(map) {
        const layers = map.getElementsInBounds();
        let points = [];
        let polygons = [];

        for (let name in layers) {
            switch(name) {
            case "marker": points = this._findPoints(layers[name]); break;
            case "polygon": polygons = this._findPolygons(layers[name]); break;
            }
        }

        this.showPoints(points, polygons);
    }

    _findPoints(list) {
        const out = [];
        list.forEach(id => out.push(POINTS.find(point => point.id == id)));
        return out;
    }

    _findPolygons(list) {
        const out = [];
        list.forEach(id => out.push(POLYGONS.find(polygon => polygon.id == id)));
        return out;
    }

    _showMessage(message) {
        const list = document.getElementById("points");
        list.innerHTML = message;
    }
}