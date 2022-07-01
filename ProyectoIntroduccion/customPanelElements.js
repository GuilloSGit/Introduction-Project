// class CustomPanelElements {
//     constructor(map) {
//         this._initialize();
//         this._panel = this._create();
//         this._records = [];
//         this.map = map;
//     }

//     _initialize() {
//         EventsListener.subscribe(
//             "bounds-changed",
//             (map) => { this._boundsChanged(map); }
//         );
//     }

//     showPoints(points, polygons) {
//         const list = this._getList();
//         let count = 0;
//         let li;

//         list.innerHTML = "";

//         for (let point of points) {
//             if (point) {
//                 li = document.createElement('li');
//                 list.appendChild(li);
//                 this._fillElement(li, point);
//                 count += 1;
//             }
//         }

//         for (let polygon of polygons) {
//             if (polygon) {
//                 li = document.createElement('li');
//                 list.appendChild(li);
//                 this._fillElement(li, polygon);
//                 count += 1;
//             }
//         }

//         this._showTitle(`
//         Total: ${POINTS.length + POLYGONS.length} registros<br/>
//         En pantalla:
//         ${points.length}
//         ${points.length === 1 ? "punto marcado" : "puntos marcados"} /
//         ${polygons.length}
//         ${polygons.length === 1 ? "área" : "áreas"}<hr/>`);
//     }

//     _filter(records) {
//         const list = this._getList();
//         list.innerHTML = "";
//         const search = this._getSearchValue();
//         let result = [
//             ...POINTS,
//             ...POLYGONS
//         ];
//         if (search !== "") {
//             result = result.filter(record => {
//                 result = record.title.toLowerCase().includes(search.toLowerCase()) || record.description.toLowerCase().includes(search.toLowerCase()) || record.id.toLowerCase().includes(search.toLowerCase());
//                 return result;
//             });
//         }
//         const answer = document.createElement('p');
//         answer.innerHTML = `Encontrados: ${result.length}`;
//         list.appendChild(answer);
//         result.map(record => {
//             this._fillElement(list, record);
//         });
//     }

//     _boundsChanged(map) {
//         const layers = map.getElementsInBounds();
//         let points = [];
//         let polygons = [];

//         for (let name in layers) {
//             switch (name) {
//                 case "marker": points = this._findPoints(layers[name]); break;
//                 case "polygon": polygons = this._findPolygons(layers[name]); break;
//                 default: break;
//             }
//         }

//         this.showPoints(points, polygons);
//     }
// }

// class CustomPanelTitle extends CustomPanelElements {

//     _getTitle() {
//         return document.getElementById("panel").firstElementChild;
//     }

//     _showTitle(message) {
//         this._getTitle().innerHTML = message;
//     }
// }

// class CustomPanelMarker extends CustomPanelElements {
//     constructor() {

//     }

//     _showPoints(){}

// }

// class CustomPanelPolygon extends CustomPanelElements {
//     constructor() {

//     }

//     _showPoints(){}

// }

