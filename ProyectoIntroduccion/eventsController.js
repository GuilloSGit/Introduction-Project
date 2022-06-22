class EventsController {
	constructor() {
		this._events = {};
	}

	subscribe(name, fnApply) {
		this._events[name] = fnApply;
	}

	trigger(name, parameters) {
		if (name in this._events) {
			this._events[name](parameters);
		}
	}
}