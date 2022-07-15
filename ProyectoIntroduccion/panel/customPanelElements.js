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

    isFiltered() { /* se sobreescribe */ }

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

    inmap() {
        
    }
    
    isFiltered(searchInput) {
        if (searchInput == null) return true;

        let isInTitle = this.record.title.toLowerCase().includes(searchInput.toLowerCase())
        let isInDescription = this.record.description.toLowerCase().includes(searchInput.toLowerCase())
        return (isInTitle || isInDescription /* && this.inmap() */);
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

    isFiltered(searchInput) {
        if (searchInput == null) return true;

        let isInTitle = this.record.title.toLowerCase().includes(searchInput.toLowerCase())
        let isInDescription = this.record.description.toLowerCase().includes(searchInput.toLowerCase())
        return (isInTitle || isInDescription /* && this.inmap() */);
    }
}