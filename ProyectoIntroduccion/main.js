var panel, map, EventsListener;

function run() {
	EventsListener = new EventsController();
	runPanel();
}

function runPanel() {
	panel = new CustomPanel();
	panel.showPoints(POINTS);
}

function runMap() {
	map = new CustomMap();
	map.createPointId = createPointId;
	map.showPoints(POINTS);
}

function createPointId(point) {
	return point.id;
}