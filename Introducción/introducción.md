# Día 1

## <u>Instructor:</u> CARLOS GAMBIRASSI 🤓
### Basic introduction to JavaScript and the web development

1) Declaración de variables, asignación de datos <br>
* var
* const
* let

------

2) Manejo de bucles
* for
* while
* do while

------

3) Condicionales
* if
* else if
* switch

------

4) Acceso a metodos o funciones
nombre del metodo() o funcion()

+ Usamos CamelCase para los nombres de metodos y funciones, y seguimos con minusculas para los nombres de variables.
+ Los nombres preferiblemente deben ser del tipo autodocumentado (con la primer palabra en Inglés y en minusculas, el resto en Español).
+ Además, usamos _functionName (underscore) para los métodos privados.

------

5) Exportacion de datos por pantalla o consola o archivo
* console.log()
* alert()
* document.write()
* write.line() (investigar ?) 

------
### Código Ejemplo

    class Facturacion {
        calculeTotalFactura() {
            let a = 1;
            for (let i = 0; i < 10; i++) {
                a += 1;
            }
        if (validarTotalFacturaConIntereses(a) > 50) {
            write.line(error);
            const node = document.getElementById("output");
            node.innerHTML = error;
            console.log(error);
        }

        verifyTotalFacturaConIntereses(valor) {
            // uso de switch-case sugerido para returns cortos y sin lógica:
            switch(valor) {
                case 10: return valor * .1;
                case 20: return valor * .5;
                case 30: return valor * .7;
                default: return valor * 2; //porque los intereses se duplican
            }

            // cuando tuviera mucha lógica, mejor usar switch-case de esta manera:
            switch(valor) {
                let outValue = null;
                case 10: out = valor * .1;
                case 20: out = valor * .5;
                case 30: out = valor * .7;
                default: out = valor * 2;
            }
            return out;
        }
    }

------
### Tarea

1 - Crear un HTML y JS donde muestre un mapa con puntos geográficos marcados en el mapa.
2 - Agregar un div (panel) para visualizar los datos de los puntos.

<hr/>
Fin día 1