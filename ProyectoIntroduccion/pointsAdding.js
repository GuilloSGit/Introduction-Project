import pointsArray from "./points.js";

/* Adding points to HTML */
function fillPanelPuntosInteres(pointsArray) {
    var points = document.getElementById("points");
    document.createElement('li');
    for (var i = 0; i < pointsArray.length; i++) {
        var point = pointsArray[i];
        var li = document.createElement('li');


        /* create a div */
        var div = document.createElement('div');
        div.className = "point";
        div.innerHTML = `<h3>${point.title}</h3>`;

        /* create a div with a class pointDescription */
        var divDescription = document.createElement('div');
        divDescription.className = "pointDescription";
        
        /* create a new div with class latAndLng */
        var divLatAndLng = document.createElement('div');
        divLatAndLng.className = "pointLatAndLng";
        divLatAndLng.innerHTML += `<p>Lat: ${point.lat}</p>`;
        divLatAndLng.innerHTML += `<p>Long: ${point.lng}</p>`;
        divLatAndLng.innerHTML += `<p>Brief: ${point.description}</p>`;

        /* create a new div with class pointImage */
        var divImage = document.createElement('div');
        divImage.className = "pointImage";
        divImage.innerHTML += `<img src="${point.image}" class="pointImage">`;

        /* append the divs to the li */
        points.appendChild(li);
        li.appendChild(div);
        div.appendChild(divDescription);
        divDescription.appendChild(divLatAndLng);
        divDescription.appendChild(divImage);
    }
}

fillPanelPuntosInteres(pointsArray);