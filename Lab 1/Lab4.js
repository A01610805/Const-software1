/* 
    1:
    Entrada: un número pedido con un prompt. 
    Salida: Una tabla con los números del 1 al número dado con sus cuadrados y cubos.
    Utiliza document.write para producir la salida
*/
const numeroEj1 = prompt("ingresa un número");

function cuad_cubos() {
    let resultado = "<table>";
    for (let i = 1; i <= numeroEj1; i++){
        resultado += "<tr>";
        resultado += "<td>" + i + "</td>" + "<td>" + i*i + "<td>" + i*i*i  +"</td>";
        resultado += "</tr>";
    }
    resultado += "</table>";
    return resultado;
}

ej1 = cuad_cubos();
document.write("<b>Ejercicio 1: </b><br/>" + ej1  + "<br/>");

/*
    2:
    Entrada: Usando un prompt se pide el resultado de la suma de 2 números generados de manera aleatoria.
    Salida: La página debe indicar si el resultado fue correcto o incorrecto, y el tiempo que tardó el usuario
    en escribir la respuesta.
*/

const num1 = Math.floor(Math.random() * 100);
const num2 = Math.floor(Math.random() * 100);
var start = new Date().getTime();
const resultado = prompt(num1 + " + " + num2 + ":");
var end = new Date().getTime();
var time = end - start;

if ((num1+num2) == resultado){
    document.write("<b>Ejercicio 2: </b><br/> El resultado de la suma es correcto.");
} else {
    document.write("<b>Ejercicio 2: </b><br/> El resultado de la suma es incorrecto.");
}
document.write(" El usuario tardó " + (time/1000) + " segundos en resolverla. <br/> <br/>");


/*
    3:
    Función: contador. Parámetros: Un arreglo de números. 
    Regresa: La cantidad de números negativos en el arreglo, la cantidad de 0's,
     y la cantidad de valores mayores a 0 en el arreglo.
*/

//const nums = [];
function contador(nums){
    let negs = 0;
    let ceros = 0;
    let pos = 0;
    let totales = [];
    for (let i = 0; i < nums.length; i++){
        if(nums[i] < 0){
            negs++;
        } else if(nums[i] == 0){
            ceros++;
        }
        else {
            pos++;
        }
    }
    return [negs, ceros, pos];
}

prueba3 = [5, 3, 10, -4, 0, 0, 5];
const totals = contador(prueba3);

document.write("<b>Ejercicio 3: </b><br/>" + totals[0] + " número(s) negativo(s), " + totals[1] + " cero(s), y " + totals[2] + " positivo(s). <br/><br/>");

/*
    4:
    Función: promedios. Parámetros: Un arreglo de arreglos de números. 
    Regresa: Un arreglo con los promedios de cada uno de los renglones de la matriz.
*/

function promedios(nums2){
    const avgs = [];
    let suma = 0;
    let count = 0;
   // for (let i = 0; i )
    for (let j = 0; j < nums2.length; j++){
        for (let i = 0; i < nums2[j].length; i++){
            suma += nums2[j[i]];
            count ++;
        }
        avgs[j] = (suma/count);
        suma = 0;
        count = 0;
    }
    return avgs;
}

let ej4 = [[1, 2, 3, 4, 5],[6, 7, 8, 9, 10]];
let proms = promedios(ej4);
document.write("<b>Ejercicio 4 : </b><br/>" + proms[0] + ", " + proms[1] + "<br/><br/>");

/*
    5:
    Función: inverso. Parámetros: Un número. 
    Regresa: El número con sus dígitos en orden inverso.
*/

function inverso(n){
    number = n.toString();
    let inv = "";
    for (let i = number.length-1; i > 0; i--){
        inv += number[i];
    }
    return inv;
}

n = 9402934;
let inverse = inverso(n);
document.write("<b>Ejercicio 5: </b><br/>" + inverse + "<br/><br/>");

/*
    6:
    Crea una solución para un problema de tu elección (puede ser algo relacionado con tus intereses,
    alguna problemática que hayas identificado en algún ámbito, un problema de programación
    que hayas resuelto en otro lenguaje, un problema de la ACM, entre otros).
    El problema debe estar descrito en un documento HTML, y la solución implementada en JavaScript,
    utilizando al menos la creación de un objeto, el objeto además de su constructor deben tener al menos
    2 métodos. Muestra los resultados en el documento HTML.
*/

const car = {
    brand: "vw",
    year: "2022",
    model: "turbo",
    color: "purple",
    time: 2,
    distance: 85,
    speed() {
        return this.distance/this.time;
    }
};

let velocidad = car.speed();
document.write("<b>Ejercicio 6:</b><br/>Función que obtiene la velocidad del objeto 'coche' <br/> velocidad: " + velocidad + "km/h");