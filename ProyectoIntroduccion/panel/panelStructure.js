class PanelStructure extends Structure {
    getHtmlContainer(id) {
        return (
            '<h5 class="panel-title"></h5>' +
            '<div class="search-box">' +
                '<input class="search-input" type="text" name="" placeholder="Buscar puntos..." id="search">' +
                '<button class="search-btn" onclick="search()">' +
                    '<i class="fas fa-search"></i>' +
                '</button>' +
                '<button class="search-clear" onclick="clearSearchInput()">' +
                    '<i class="fas fa-times"></i>' +
                '</button>' +
            '</div>' +
            `<div id="${ id }"><ul></ul></div>`
        );
    }

    getHtmlTotals() {
        return (
            "Total de registros: " +
            `${POINTS.length + POLYGONS.length}<br />` +
            "En pantalla: " +
            `Marcadores  / ` +
            `&#193;reas `
        );
    }
}