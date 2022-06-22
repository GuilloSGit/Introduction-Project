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
	map.showPoints(POINTS);
}