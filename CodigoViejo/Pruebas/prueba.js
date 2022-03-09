/* lenguaje no tipado; no tenemos que definir las variables.
 sin embargo, es recomendable utilizar la palabra reservada "var" (si quieres la variable en todo tu código),
 o "let" para variables locales (únicamente útil en el entorno donde se declara, como adentro de funciones)
Recomendable utilizar constantes (const), para variables que no quieras que se puedan editar desde la consola. (tiene el mismo alcance que "let".)
 */

var numero_cervezas = 0;
console.log(numero_cervezas);       //Para imprimir en la consola. 
console.info(numero_cervezas);      //Imprime en la consola, con una "i" de información al lado.
console.warn(numero_cervezas);      //Para imprimir un warning dentro de la consola.
console.error(numero_cervezas);     // Imprime un error.


alert("Si tomas no manejes!"); //Crea alertas
const catador = prompt("¿Cuál es tu nombre?");  //Pregunta que aparece como alerta.

console.log("Hola " + catador);

const respuesta = confirm("¿Te gustan las stouts?");

console.log(confirm);

// Función tradicional
function beber(numero) {
    if (numero > 1) {
    console.log("Beber" + numero + "cervezas");
    } else if (numero == 1) {
        console.log("Beber una cerveza");
    } else if (numero == 0) {
        console.log("No gracias, yo manejo");
    }
}

beber(numero_cervezas);


// Función moderna (función anónima que se asigna a una variable mediante apuntadores)


const disfrutar = () => console.log("Disfruta tu cerveza!");
disfrutar();

const disfrutar_varias = (numero) => console.log("Disfruta tus " + numero + " cervezas");
disfrutar_varias(numero_cervezas);


/* Ejemplo práctico de como utilizar las funciones anónimas; "document" es el documento HTML;
"getElementById" te permite ingresar un ID para utilizar su elemento en la función que queremos hacer.
"onclick", como su nombre lo indica, crea una reacción al existir un click dentro del "ID".


document.getElementById("prueba").onclick = disfrutar;
document.getElementById("prueba").onclick = () => console.warn ("me duele la cabeza");
*/

function tabla_cuadrados() {
    let resultado = "<table>";
    for (let i = 1; i <= 10; i++){
        resultado += "<tr>";
        resultado += "<td>" + i + "</td>" + "<td>" + i*i + "</td>";
        resultado += "</tr>";
    }
    resultado += "</table>";
    return resultado;
}

document.getElementById("resultados").innerHTML = tabla_cuadrados();


// arreglos
const cervezas = ["Good day"];
cervezas.push("República");
cervezas[2] = "Carta blanca";
cervezas["favorita"] = "Segundo Imperio";       // Los arreglos son diccionarios
cervezas["mala"] = "Ultra";

for (let i in cervezas) {       // Va imprimiendo los valores de los arreglos
    console.log(i);
}


