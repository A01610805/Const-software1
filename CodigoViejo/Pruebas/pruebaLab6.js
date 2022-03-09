function generar_imagen(ruta, alt){
    return '<img src="' + ruta + '"alt="' + alt + '">';
}

function mostrar_super_lupe(){
    let div_imagen = document.getElementById("imagen");  //Convertimos la imagen en una variable
    let ruta_imagen = "https://beerbank.mx/1407-large_default/hercules-super-lupe.jpg";
    let alt_imagen = "Imagen de una cerveza Super Lupe";
    div_imagen.innerHTML = generar_imagen(ruta_imagen, alt_imagen);  //Le otorgamos valores a la imagen
}

document.getElementById("republica").onclick = () => {  //Función anónima
    console.log("Click en república");
}

function limpiar_imagen(){
    document.getElementById("imagen").innerHTML = "";
    div_macanuda.onclick = mostrar_macanuda;
}

function mostrar_macanuda() {
    let div_imagen = document.getElementById("imagen");  //Convertimos la imagen en una variable
    let ruta_imagen = "https://cdn.shopify.com/s/files/1/0051/7072/4928/products/Macanuda_1024x1024.png?v=1604348846";
    let alt_imagen = "Imagen de una cerveza Macanuda";
    div_imagen.innerHTML = generar_imagen(ruta_imagen, alt_imagen);
    div_macanuda.onclick = limpiar_imagen;
}


let div_macanuda = document.getElementById("macanuda");
div_macanuda.onclick = mostrar_macanuda; //Si se ponen paréntesis en mostrar_macanuda(), se ejecuta automáticamente