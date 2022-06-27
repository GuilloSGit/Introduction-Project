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

    showPoints(points) {
        const list = document.getElementById("points");
        let count = 0;
        let li;
        
        list.innerHTML = "";
        
        for (let point of points) {
            if (this._filter(point)) {
                li = document.createElement('li');
                list.appendChild(li);
                this._fillPoint(li, point);
                count += 1;
            }
        }

        this._showPanelMessage(`En el mapa hay ${ points.length } y filtrados ${ count } de un total de ${ POINTS.length } registros`);

    }

    _filter(point) {
        return true;
    }

    _showPanelMessage(message) {
        const list = document.getElementById("points");
        list.innerHTML = `<h3>${message}</h3>`;
    }

    _fillPoint(li, point) {
        /* Crear un div para cada ítem */
        var div = document.createElement('div');
        div.className = 'point';
        div.innerHTML = (
            `<h3>${point.title}</h3>` +
            `<div class="point-description">` +
            `<p><b>Lat:</b> ${point.lat}</p>` +
            `<p><b>Long:</b> ${point.lng}</p>` +
            `<p class="item-info"><b>Info:</b> ${point.description}</p>` +
            `</div>` +
            `<div class="point-image">` +
            `<img src="${point.image}" class="point-image">`
        );
        /* Incorporando cada ítem con el método appendChild al HTML */
        li.appendChild(div);
    }

    _boundsChanged(map) {
        const ids = map.getElementsInBounds();
        const points = [];
        ids.forEach(id => {
            points.push(POINTS.find(point => point.id == id));
        });
        this.showPoints(points);
    }

    _showMessage(message) {
        const list = document.getElementById("points");
        list.innerHTML = message;
    }
}