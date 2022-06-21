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
        /* create a div */
        const div = document.createElement('div');
        div.className = "point";
        div.innerHTML = `<h3>${point.title}</h3>`;

        /* create a div with a class pointDescription */
        const divDescription = document.createElement('div');
        divDescription.className = "pointDescription";
        
        /* create a new div with class latAndLng */
        const divLatAndLng = document.createElement('div');
        divLatAndLng.className = "pointLatAndLng";
        divLatAndLng.innerHTML += `<p>Lat: ${point.lat}</p>`;
        divLatAndLng.innerHTML += `<p>Long: ${point.lng}</p>`;
        divLatAndLng.innerHTML += `<p>Brief: ${point.description}</p>`;

        /* create a new div with class pointImage */
        const divImage = document.createElement('div');
        divImage.className = "pointImage";
        divImage.innerHTML += `<img src="${point.image}" class="pointImage">`;

        /* append the divs to the li */
        li.appendChild(div);
        div.appendChild(divDescription);
        divDescription.appendChild(divLatAndLng);
        divDescription.appendChild(divImage);
    }
}