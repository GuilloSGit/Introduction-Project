class SerVivo {
    constructor(tipo) {
        this.tipo = tipo;
        this.edad = 0;
    }
    getTipo() {
        return this.tipo;
    }
    getNombre() {
        return this.nombre;
    }
}

class Planta extends SerVivo { // 🪴🌱
    constructor(tipo, nombre, nombreCientifico) {
        super(tipo);
        this.nombre = nombre;
        this.nombreCientifico = "";
    }
    getNombreCientifico() {
        return this.nombreCientifico;
    }
    asignarNombreCientifico(nombreCientifico) {
        this.nombreCientifico = nombreCientifico;
    }
}

class Persona extends SerVivo { // 🧑🏻‍🤝‍🧑🏻🧑🏻‍🤝‍🧑🏿
    constructor(tipo, nombre, apellido, edad, genero) {
        super(tipo);
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.genero = "";
    }
    getNombreCompleto() {
        return `${this.nombre} ${this.apellido}`;
    }
    getEdad() {
        return this.edad;
    }
    asignarEdad(edadArbitraria) {
        this.edad = edadArbitraria;
    }
    asignarGenero(genero) {
        this.genero = genero;
    }
    esMayorDeEdad() {
        return this.edad >= 18;
    }
}

class Animal extends SerVivo { // 🐒🦍🐩
    constructor(tipo, nombre, edad) {
        super(tipo);
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar() { }
    asignarEdad(edad) {
        this.edad = edad;
    }
}

const persona1 = new Persona("persona", "Juan", "Perez", 30, "masculino");
const persona2 = new Persona("persona", "Enzo", "Navarta", 10, "masculino");
console.log(persona1.getNombreCompleto());
console.log(persona2.esMayorDeEdad()? `${persona2.getNombreCompleto()} es mayor de edad` : `${persona2.getNombreCompleto()} no es mayor de edad`);