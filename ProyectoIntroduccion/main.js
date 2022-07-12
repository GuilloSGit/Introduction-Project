var _initMap = false;
var EventsListener;

function run() {
	const main = new Main();
	main.initialize();
	main.start();
}

class Main {
	initialize() {
		EventsListener = new EventsController();
	}

	start() {
		this._startPanel();
		this._startMap();
	}

	_startPanel() {
		const panel = new PanelModule("panel");

		const markers = this._preparePanelElements(POINTS, CustomPanelMarker);
		panel.addElements(markers);

		const polygons = this._preparePanelElements(POLYGONS, CustomPanelPolygon);
		panel.addElements(polygons);

		panel.create();
		panel.show();
	}

	_preparePanelElements(elements, clazz) {
		const out = [];

		for (let element of elements) {
			out.push(new clazz(element));
		}

		return out;	
	}

	_startMap() {
		EventsListener.subscribe(
			"google.ready",
			() => { 
				this._map();
			}
		);
	}

	_map() {
		const map = new MapModule();
		map.create("map");

		const markers = new CustomMapMarkers();
		map.addLayer(markers);
		markers.add(POINTS);
		markers.show();

		const polygons = new CustomMapPolygons();
		map.addLayer(polygons);
		polygons.add(POLYGONS);
		polygons.show();
	}
}




function initMap() {
	try {
		EventsListener.trigger("google.ready");
	}
	catch(e) {
		setTimeout(() => initMap(), 100);
	}
}





function search() {
	EventsListener.trigger("filter-applied", document.getElementById("search").value);
	document.getElementById("search").value = "";
}

function clearSearchInput() {
	EventsListener.trigger("filter-applied", "");
	document.getElementById("search").value = "";
}