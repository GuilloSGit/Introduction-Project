MODULE

VIEW -> STRUCTURE

LOGIC

DATA -> SERVICE


Panel
		
	-> PanelLogic
		/*
		PANEL MARKER
		fill()
		isFiltered()

		PANEL POLYGONS
		fill()
		isFiltered()

		PANEL
		fill()
		_initialize()
		addElements()
		create()
		applyFilter()
		_boundsChanged()
		_filterElementsInMap(list, type)
		*/

	-> PanelData
		/* 
		_create(id)
		*/

	-> PanelView
		/* 
		show()
		hide()
		setTitle()
		*/
	-> PanelStructure
		/* 
		renderElements()
		clearElements()
		*/
	-> PanelService
		/* 
		
		*/


Map
		-> MapLogic
		-> MapView


/* 
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

    show() { }

    hide() { }
}
*/