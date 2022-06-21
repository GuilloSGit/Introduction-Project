import pointsArray from "./points.js";

/* Adding points to HTML */
function fillPanelPuntosInteres(pointsArray) {
    var points = document.getElementById("points");
    document.createElement('li');
    for (var i = 0; i < pointsArray.length; i++) {
        var point = pointsArray[i];
        var li = document.createElement('li');
        /* create a div with a class pointDescription */
        var div = document.createElement('div');
        div.className = "pointDescription";
        div.innerHTML = `<h3>${point.title}</h3>`;
        /* create a new div with class latAndLng */
        var divLatAndLng = document.createElement('div');
        divLatAndLng.className = "pointLatAndLng";
        divLatAndLng.innerHTML += `<p>Lat: ${point.lat}</p>`;
        divLatAndLng.innerHTML += `<p>Long: ${point.lng}</p>`;
        div.innerHTML += `<img src="${point.image}" class="pointImage">`;
        points.appendChild(li);
        li.appendChild(div);
        div.appendChild(divLatAndLng);
    }
}

fillPanelPuntosInteres(pointsArray);