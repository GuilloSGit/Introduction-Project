class CustomPanelElement {
    constructor(type, record) {
        this.type = type;
        this.record = record;
        this.instance = null;
        this.inmap = false;
        this.panel = {
            removeChild: () => null
        };
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
        try {
            this.panel.removeChild(this.instance);
        }catch(e) { /* no hace nada */ }
    }
}

class CustomPanelMarker extends CustomPanelElement {
    constructor(record) {
        super("marker", record);
    }

    fill() {
        this.instance.className = 'point';
        this.instance.innerHTML = (
            `<h3 key="${this.record.id}">${this.record.title}</h3>` +
            `<div class="point-description">` +
            `<p class="item-info"><b>Info:</b> ${this.record.description}</p>` +
            `</div>` +
            `<div class="point-image">` +
            `<img src="${this.record.image}" class="point-image">`
        );
    }

    isFiltered(value) {
        const out = (value == null ? true : this.record.title.toLowerCase().includes(value.toLowerCase()) || this.record.description.toLowerCase().includes(value.toLowerCase()));
        return out && this.inmap;
    }
}


class CustomPanelPolygon extends CustomPanelElement {
    constructor(record) {
        super("polygon", record);
    }

    fill() {
        this.instance.className = 'polygon';
        this.instance.innerHTML = (
            `<h3 key="${this.record.id}">${this.record.title}</h3>` +
            `<div class="polygon-description">` +
            `<p class="item-info"><b>Info:</b> ${this.record.description}</p>` +
            `</div>` +
            `<div class="polygon-image">` +
            `<img src="${this.record.image}" class="polygon-image">`
        );
    }

    isFiltered(value) {
        const out = (value == null ? true : this.record.description.includes(value));
        return out && this.inmap;
    }
}