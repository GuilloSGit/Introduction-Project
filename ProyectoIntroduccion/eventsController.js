class EventsController {
	constructor() {
		this._events = {};
		this._triggers = {};
	}

	subscribe(name, apply, attributes = {}) {
		this._events[name] ||= [];
		this._events[name].push(apply);

		if (name in this._triggers && attributes.retroactive === true) {
			this.trigger(name, this._triggers[name]);
		}
	}

	trigger(name, parameters) {
		this._triggers[name] = parameters;
		if (name in this._events) {
			this._events[name].forEach(apply => apply(parameters));
		}
	}
}