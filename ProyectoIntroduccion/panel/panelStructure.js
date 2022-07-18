class PanelStructure extends Structure {
    getHtmlContainer(id) {
        return (
            '<h5 class="panel-title"></h5>' +
            `<div id="${ id }Filter"></div>` +
            `<div id="${ id }List"><ul></ul></div>`
        );
    }

    getHtmlTotals() {
        return (
            "Total de registros: " +
            `${POINTS.length + POLYGONS.length}<br />` +
            "En pantalla:<br />" +
            `Marcadores / ` +
            `Áreas `
        );
    }
}