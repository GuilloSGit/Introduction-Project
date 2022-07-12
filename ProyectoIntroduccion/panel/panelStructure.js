class PanelStructure {
    constructor(parent) {
        this.Parent = parent;
    }

    getHtmlContainer(id) {
        return (
            '<h5 class="panel-title"></h5>' +
            '<span>' +
                '<button class="btn-create" onclick="createNewPoint()">' +
                    '<i class="fas fa-plus"></i>' +
                '</button>' +
            '</span>' +
            '<div class="search-box">' +
                '<input class="search-input" type="text" name="" placeholder="Buscar..." id="search">' +
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
            `Áreas `
        );
    }
}