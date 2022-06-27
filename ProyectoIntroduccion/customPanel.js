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

        this._showPanelMessage(`En el mapa se ven ${ points.length + polygons.length } puntos marcados, de un total de ${ POINTS.length + POLYGONS.length } registros`);

    }

    _filter(element) {
        return true;
    }

    _showPanelMessage(message) {
        const list = document.getElementById("points");
        list.innerHTML = `<h3>${message}</h3>`;
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
        const ids = map.getElementsInBounds();
        const points = [];
        const polygons = [];
        
        const elements = points.concat(polygons);

        ids.forEach(id => {
            points.push(POINTS.find(point => point.id == id));
            polygons.push(POLYGONS.find(polygon => polygon.id == id));
        });

        this.showPoints(elements);

    }

    _showMessage(message) {
        const list = document.getElementById("points");
        list.innerHTML = message;
    }
}