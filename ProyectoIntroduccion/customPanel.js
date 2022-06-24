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
        let li;
        
        list.innerHTML = "";

        if (points.length < 1) {
            this._showPanelMessage("No hay puntos que mostrar en esta sección del mapa");
        }

        for (let point of points) {
            li = document.createElement('li');
            list.appendChild(li);
            this._fillPoint(li, point);
        }
    }

    _showPanelMessage(message) {
        const list = document.getElementById("points");
        const li = document.createElement('li');
        list.appendChild(li);
        li.innerHTML = `<h3>${message}</h3>`;
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
        const ids = map.getPointsInBounds();
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