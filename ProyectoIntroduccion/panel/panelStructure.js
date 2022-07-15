class PanelStructure extends Structure {
    getHtmlContainer(id) {
        return (
            '<h5 class="panel-title"></h5>' +
            '<span>' +
                '<button class="btn-create" onclick="createNewPoint()">' +
                    '<i class="fas fa-plus"></i>' +
                '</button>' +
            '</span>' +
            `<div id="${ id }Filter"></div>` +
            `<div id="${ id }List"><ul></ul></div>`
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