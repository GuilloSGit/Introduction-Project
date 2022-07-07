class CustomPanelElement {
    constructor(type, element) {
        this.type = type;
        this.element = element;
        this.instance = null;
        this.panel = null;
        this.inmap = false;
    }

    create() {
        if (this.instance == null) {
            this.instance = document.createElement('li');
            this.fill();
        }
    }

    isFiltered() {
        return true;
    }

    fill() { /* se sobreescribe */ }

    show(panel) {
        this.panel = panel;
        panel.appendChild(this.instance);
    }

    hide() {
        this.panel.removeChild(this.instance);
    }
}

class CustomPanelMarker extends CustomPanelElement {
    constructor(element) {
        super("marker", element);
    }

    fill() {
        this.instance.className = 'point';
        this.instance.innerHTML = (
            `<h3 key="${this.element.id}">${this.element.title}</h3>` +
            `<div class="point-description">` +
            `<p class="item-info"><b>Info:</b> ${this.element.description}</p>` +
            `</div>` +
            `<div class="point-image">` +
            `<img src="${this.element.image}" class="point-image">`
        );
    }

    isFiltered(value) {
        return value == null || (this.instance.title.includes(value) && this.inmap);
    }
}


class CustomPanelPolygon extends CustomPanelElement {
    constructor(element) {
        super("polygon", element);
    }

    fill() {
        this.instance.className = 'polygon';
        this.instance.innerHTML = (
            `<h3 key="${this.element.id}">${this.element.title}</h3>` +
            `<div class="polygon-description">` +
            `<p class="item-info"><b>Info:</b> ${this.element.description}</p>` +
            `</div>` +
            `<div class="polygon-image">` +
            `<img src="${this.element.image}" class="polygon-image">`
        );
    }

    isFiltered(value) {
        return value == null || this.instance.description.includes(value);
    }
}