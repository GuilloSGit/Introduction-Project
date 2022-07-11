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
		*/
		
		-> PanelStructure
		/* 
		renderElements()
		clearElements()
		setTitle()
		*/
	
	-> PanelService
		/* 
		
		*/


Map
	-> MapLogic
	/* 
	getMap()
	addLayer(layer)
	_create(attributes)
	_mapEvents(map)
	_getElementsInBounds()
	createId()
	*/

	-> MapView
	/* 
	setMap(map)
	add(elements)
	show()
	hide()
	*/
	
	-> MapStructure
	/* 
	
	*/
	
	-> MapData
	/* 
	
	*/
	
	-> MapService
	/* 
	
	*/