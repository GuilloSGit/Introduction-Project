class Vehiculo {
	constructor(modelo) {
		this._modelo = modelo;
		this._motor = "apagado";
		this._ruedas = -1;
		this._puertas = -1;
		this._kms = 0;
	}

	encender() {
		this._motor = "encendido";
	}

	apagar() {
		this._motor = "apagar";
	}

	avanzar(km) {
		this._kms += km;
	}

	get kilometraje() {
		return this._kms;
	}

	get modelo() {
		return this._modelo;
	}
}



class Auto extends Vehiculo {
	constructor(modelo) {
		super(modelo);
		this.ruedas = 4;
		this.puertas = 4;
	}
}



class Auto5Puertas extends Auto {
	constructor(modelo) {
		super(modelo);
		this.puertas = 5;
	}

	abrirPuertaTrasera() {
		this.puertaTrasera = "abierta";
		console.log("puerta trasera abierta");
	}

	cerrarPuertaTrasera() {
		this.puertaTrasera = "cerrada";
		console.log("puerta trasera cerrada");
	}
}

const auto = new Auto5Puertas("Suran");
auto.encender();
auto.avanzar(10);
auto.apagar();
auto.abrirPuertaTrasera();
console.log(auto.modelo);
console.log(auto.kilometraje);