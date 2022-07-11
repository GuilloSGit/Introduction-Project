MODULE

VIEW -> STRUCTURE

LOGIC

DATA -> SERVICE


	Panel
		-> PanelLogic
		-> PanelData
		-> PanelView
		-> PanelStructure
		-> PanelService


	Map
		-> MapLogic
		-> MapView

class Map {
	constructor() {
		this.panelFacade = {
			show: () => null,
			hide: () => null
		}
		this.ready();
	}

	ready() {
		EventsListener.trigger(
			"map.ready",
			() => this.getFacade()
		);
	}

	subscriptions() {
		EventsListener.subscribe(
			"panel.ready",
			(facade) => this.panelFacade = facade
		);
	}

	getFacade() {
		return {
			show: () => this.View.show(),
			hide: () => this.View.hide()
		}
	}
}

class MapView() {
	clickButton() {
		this.Parent.panelFacade.show();
	}

	show() {}

	hide() {}
}






class Panel {
	constructor() {
		this.mapFacade = {
			show: () => null,
			hide: () => null
		};
		this._link("Logic", "PanelLogic");
		this._link("View", "PanelView");
		this.ready();
	}

	_link(name, instance) {
		this[name] = new instance(this);
	}

	ready() {
		EventsListener.trigger(
			"panel.ready",
			() => this.getFacade()
		);
	}

	subscriptions() {
		EventsListener.subscribe(
			"map.ready",
			(facade) => this.mapFacade = facade
		);
	}

	getFacade() {
		return {
			show: () => this.View.show(),
			hide: () => this.View.hide()
		}
	}
}



class PanelLogic {
	constructor(parent) {
		this.Parent = parent;
	}

	get View() {
		return this.Parent.View;
	}

	getResult() {
		return [1, 2, 3];
	}
}



class PanelView {
	constructor(parent) {
		this.Parent = parent;
	}

	clickButton() {
		this.Parent.mapFacade.show();
	}

	get Logic() {
		return this.Parent.Logic;
	}

	refresh() {
		const result = this.Logic.getResult();
	}

	show() {}

	hide() {}
}