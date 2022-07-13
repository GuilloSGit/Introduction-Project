var _initMap = false;
var EventsListener;
var Main;

function run() {
	Main = new Application();
	Main.initialize();
	Main.start();
}

class Application {
	initialize() {
		this.Configuration = CONFIGURATION;
		EventsListener = new EventsController();
	}

	start() {
		this._instantiateModules();
		EventsListener.trigger("Application.start");
	}

	_instantiateModules() {
		this.Configuration.modules.forEach(name => {
			this[name] = eval(`new ${ name }()`);
		});
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