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
        const list = this._getList();
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

        this._showTitle(`
        Total: ${POINTS.length + POLYGONS.length} registros<br/>
        En pantalla:
        ${points.length}
        ${points.length === 1 ? "punto marcado" : "puntos marcados"} /
        ${polygons.length}
        ${polygons.length === 1 ? "área" : "áreas"}<hr/>`);
    }

    _filter(element) {
        let elements = [];
        elements = [...elements, element];
        return elements
    }

    _search(search) {
        let element = document.getElementById(search.value);
    }


    _clear() {
        this._getList().innerHTML = "";
    }

    _showTitle(message) {
        this._getTitle().innerHTML = message;
    }

    _getTitle() {
        return document.getElementById("panel").firstElementChild;
    }

    _getList() {
        return document.getElementById("panel").lastElementChild;
    }

    _boundsChanged(map) {
        const layers = map.getElementsInBounds();
        let points = [];
        let polygons = [];

        for (let name in layers) {
            switch (name) {
                case "marker": points = this._findPoints(layers[name]); break;
                case "polygon": polygons = this._findPolygons(layers[name]); break;
                default: break;
            }
        }

        this.showPoints(points, polygons);
    }

    _fillElement(li, element) {
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

}