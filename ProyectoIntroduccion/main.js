var panel, map, EventsListener;

function run() {
	EventsListener = new EventsController();
	runPanel();
}

function runPanel() {
	panel = new PanelModule("panel");

	const markers = preparePanelElements(POINTS, CustomPanelMarker);
	panel.addElements(markers);

	const polygons = preparePanelElements(POLYGONS, CustomPanelPolygon);
	panel.addElements(polygons);

	panel.create();
	panel.show();
}

function preparePanelElements(elements, clazz) {
	const out = [];

	for (let element of elements) {
		out.push(new clazz(element));
	}

	return out;	
}

function runMap() {
	map = new MapModule();

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
	EventsListener.trigger("filter-applied", document.getElementById("search").value);
	document.getElementById("search").value = "";
}

function clearSearchInput() {
	EventsListener.trigger("filter-applied", "");
	document.getElementById("search").value = "";
}

function createElement(element) {
	panel.createNewElement(element);
	map.createNewElement(element);
	panel.showPoints(POINTS, POLYGONS);
}