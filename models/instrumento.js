// Arreglo de objetos de clase Instrumento
const instrumentos_array = [
    {nombre: "Guitarra"},
    {nombre: "Piano"},
    {nombre: "Saxofón"}
];
module.exports = class Instrumento {

    // El constructor sirve para crear un nuevo objeto
    constructor(nuevo_nombre){  
        this.nombre = nuevo_nombre;
    }

    // El constructor sirve para crear un nuevo objeto
    save() {
        instrumentos_array.push(this);
    }

        // Este método servirá para devolver los objetos del almacenamiento persistene
    static fetchAll() {
        return instrumentos_array;
    }
}