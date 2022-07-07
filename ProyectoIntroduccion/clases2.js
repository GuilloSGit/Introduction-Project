class SerVivo {
    constructor(tipo, edad, nombre) {
        this._tipo = tipo;
        this._nombre = nombre;
        this._edad = edad;
    }

    get edad() {
        return this._edad;
    }

    get tipo() {
        return this._tipo;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get nombre() {
        return this._nombre;
    }
}

class Planta extends SerVivo { // 🪴🌱
    constructor(edad, nombre) {
        super("planta", edad, nombre);
        this._nombreCientifico = null;
    }
    get nombreCientifico() {
        return this._nombreCientifico;
    }
    set nombreCientifico(nombreCientifico) {
        this._nombreCientifico = nombreCientifico;
    }
}

class Persona extends SerVivo { // 🧑🏻‍🤝‍🧑🏻🧑🏻‍🤝‍🧑🏿
    constructor(edad, nombre) {
        super("persona", edad, nombre);
        this._apellido = "";
        this._genero = "";
    }

    set apellido(apellido) {
        this._apellido = apellido;
    }

    get apellido() {
        return this._apellido;
    }

    get nombreCompleto() {
        return `${this.nombre} ${this.apellido}`;
    }

    set genero(genero) {
        this._genero = genero;
    }

    get genero() {
        return this._genero;
    }

    esMayorDeEdad() {
        return this.edad >= 18;
    }
}

class Animal extends SerVivo { // 🐒🦍🐩
    constructor(edad, nombre) {
        super("animal", edad, nombre);
    }

    saludar() { }
}


class Hombre extends Persona {
    constructor(edad, nombre) {
        super(edad, nombre);
        this.genero = "masculino";
    }
}

class Mujer extends Persona {
    constructor(edad, nombre) {
        super(edad, nombre);
        this.genero = "femenino";
    }
}

const persona1 = new Hombre(30, "Juan");
persona1.apellido = "Perez";

const persona2 = new Persona(10, "Enza");
persona2.apellido = "Navarta";
persona2.genero = "femenino"

console.log(persona1.nombreCompleto);
console.log(persona2.esMayorDeEdad()? `${persona2.nombreCompleto} es mayor de edad` : `${persona2.nombreCompleto} no es mayor de edad`);