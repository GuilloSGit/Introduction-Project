class PanelFilter {
	constructor(parent) {
		this.Parent = parent;
		this._conditions = [];
		this._input = "";
	}

	addCondition(condition) {
		this._conditions.push(condition);
	}

	get View() {
		return this.Parent.View;
	}

	create() {
		this.View.getAreaFilters().innerHTML = this._getHtml();
	}

/**
 * Crea un HTML con los filtros que se pueden aplicar a la lista de elementos.
 * Como tiene que haber una comunicación entre el DOM y el código, se crearon variables estáticas [_instances línea 81],
 * para guardar los valores ingresados por el usuario en el input de búsqueda cuando se hace click en el botón de búsqueda.
 * 
 * @returns A string with HTML code.
 */
    _getHtml() {
    	PanelFilter.addInstance(
    		this.Parent.name,
    		"search",
    		() => this.search()
    	);

    	PanelFilter.addInstance(
    		this.Parent.name,
    		"clear",
    		() => this.clear()
    	);

        return (
            '<div class="search-box">' +
                '<input class="search-input" type="text" name="" placeholder="Buscar..." id="search">' +
                `<button class="search-btn" onclick="PanelFilter.applyEvent(\'${ this.Parent.name }\', \'search\')">` +
                    '<i class="fas fa-search"></i>' +
                '</button>' +
                `<button class="search-clear" onclick="PanelFilter.applyEvent(\'${ this.Parent.name }\', \'clear\')">` +
                    '<i class="fas fa-times"></i>' +
                '</button>' +
            '</div>'
        );
    }

    apply(elements) {
    	const out = [];

        for (let element of elements) {
        	if (this._evaluate(element)) {
        		out.push(element);
        	}
        }
 
 		return out;
    }

    _evaluate(element) {
       	for (let condition of this._conditions) {
      		if (!condition(element, this._input)) return false;
      	}
      	return true;
    }

	search() {
		this._input = document.getElementById("search").value;
		this.View.refresh();
	}

	clear() {
		this._input = "";
		document.getElementById("search").value = "";
		this.View.refresh();
	}

    static _instances = {};

    static addInstance(name, event, apply) {
    	this._instances[name] ||= {};
    	this._instances[name][event] = apply;
    }

    static applyEvent(name, event) {
    	this._instances[name][event]();
    }
}