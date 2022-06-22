class CustomPanel {
    showPoints(points) {
        const list = document.getElementById("points");
        let li;

        for (let point of points) {
            li = document.createElement('li');
            list.appendChild(li);
            this._fillPoint(li, point);
        }
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
}