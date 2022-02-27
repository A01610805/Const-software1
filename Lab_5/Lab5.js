    
function descripcion(){
    let materialize = document.getElementById("descripcion");  //Convertimos el texto en una variable
    materialize.innerHTML = "Material design es un framework responsivo muy amigable que nos ayuda a diseñar páginas web con mucha más facilidad que si lo hiciéramos de cero. Consiste en una serie de funciones predefinidas escritas en CSS y JS, que podemos personalizar y utilizar dentro de nuestro código.";  //Le otorgamos valores a la imagen
}

const carrito = new Array (); 

const acustica = document.getElementById("botonGuitarraAcustica");  // Para agregar una guitarra acústica al carrito
acustica.onclick = () => {
    let instrumento = {
        "nombre": "Guitarra Electroacustica",
        "precio": 4000
    };
    carrito.push(instrumento);
};

const electrica = document.getElementById("botonGuitarraElectrica");  // Para agregar una guitarra eléctrica al carrito
electrica.onclick = () => {
    let instrumento = {
            "nombre": "Guitarra Electrica",
            "precio": 2999
        };
    carrito.push(instrumento);
};

const bajo = document.getElementById("botonBajo");  // Para agregar un bajo eléctrico al carrito
bajo.onclick = () => {
    let instrumento = {
        "nombre": "Bajo Electrico",
        "precio": 3500
    };
carrito.push(instrumento);
};

const verCarrito = document.getElementById("verCarrito");

function ocultar_carrito() {                                    //Par de funciones para mostrar y ocultar carrito
    document.getElementById("carrito").innerHTML = "";
    mostrar_carrito();
}


function mostrar_carrito() {
    verCarrito.onclick = () => { 
    let acusticas = carrito.filter(instrumento => instrumento.nombre === "Guitarra Electroacustica");
    let electricas = carrito.filter(instrumento => instrumento.nombre === "Guitarra Electrica");
    let bajos = carrito.filter(instrumento => instrumento.nombre === "Bajo Electrico");
    let cant_acusticas = acusticas.length;
    let cant_electricas = electricas.length;
    let cant_bajos = bajos.length;

    let subtotal_ac = cant_acusticas*4000;
    let iva_ac = subtotal_ac * .16;
    let total_ac = subtotal_ac + iva_ac;

    let subtotal_el = cant_electricas*2999;
    let iva_el = subtotal_el * .16;
    let total_el = subtotal_el + iva_el;

    let subtotal_bajo = cant_bajos*3500;
    let iva_bajo = subtotal_bajo * .16;
    let total_bajo = subtotal_bajo + iva_bajo;    

    document.getElementById("carrito").innerHTML = "<table><thead><tr><th>Producto</th><th>Cantidad</th><th>Precio</th><th>IVA</th><th>Total</th></tr></thead><tbody> <tr> <td>Guitarra Electroacustica</td><td>" + cant_acusticas + "</td><td>$" + subtotal_ac + "</td><td>$" + iva_ac + "</td><td>$" + total_ac + "</td></tr><tr><td>Guitarra Electrica</td><td>" + cant_electricas + "</td><td>$" + subtotal_el + "</td><td>$" + iva_el + "</td><td>$" + total_el + "</td><tr> <td>Bajo Electrico</td><td>" + cant_bajos + "</td><td>$" + subtotal_bajo + "</td><td>$" + iva_bajo + "</td><td>$" + total_bajo + "</td></tr>"; // Aqui va la tabla escrita en HTML 

        verCarrito.onclick = ocultar_carrito;
    }
}

mostrar_carrito();