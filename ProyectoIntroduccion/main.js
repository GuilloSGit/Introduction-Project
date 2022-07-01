var panel, map, EventsListener;

function run() {
	EventsListener = new EventsController();
	runPanel();
}

function runPanel() {
	panel = new CustomPanel();
	panel.showPoints(POINTS, POLYGONS);
}

function runMap() {
	map = new CustomMap();

	const markers = new CustomMapMarkers();
	map.addLayer(markers);
	markers.add(POINTS);
	markers.show();

	const polygons = new CustomMapPolygons();
	map.addLayer(polygons);
	polygons.add(POLYGONS);
	polygons.show();
}

function createPointId(point) {
	return point.id;
}

function search() {
	panel._filter();
}

function clearSearchInput() {
	document.getElementById("search").value = "";
	panel.showPoints(POINTS, POLYGONS);
}

function createElement(element) {
	panel.createNewElement(element);
	map.createNewElement(element);
	panel.showPoints(POINTS, POLYGONS);
}