


function descripcion(){
    let materialize = document.getElementById("descripcion");  //Convertimos el texto en una variable
    materialize.innerHTML = "Material design es un framework responsivo muy amigable que nos ayuda a diseñar páginas web con mucha más facilidad que si lo hiciéramos de cero. Consiste en una serie de funciones predefinidas escritas en CSS y JS, que podemos personalizar y utilizar dentro de nuestro código.";  //Le otorgamos valores a la imagen
}

const carrito = new Array (); 

const acustica = document.getElementById("botonGuitarraAcustica");  // Para agregar una guitarra acústica al carrito
acustica.onclick = () => {
    carrito.push({producto: "Guitarra Electroacústica", precio: 4000});
};

const acustica = document.getElementById("botonGuitarraelectrica");  // Para agregar una guitarra eléctrica al carrito
acustica.onclick = () => {
    carrito.push({producto: "Guitarra Electroacústica", precio: 4000});
};

const acustica = document.getElementById("botonBajo");  // Para agregar un bajo eléctrico al carrito
acustica.onclick = () => {
    carrito.push({producto: "Guitarra Electroacústica", precio: 4000});
};

