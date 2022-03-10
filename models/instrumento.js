const db = require('../util/database');

module.exports = class Instrumento {

    // El constructor sirve para crear un nuevo objeto
    constructor(nuevo_nombre, nuevo_tipo, nueva_descripcion, nueva_imagen){  
        this.nombre = nuevo_nombre;
        this.tipo = nuevo_tipo;
        this.descripcion = nueva_descripcion;
        this.imagen = nueva_imagen;
    }

    // El constructor sirve para crear un nuevo objeto
    save() {
        return db.execute('INSERT INTO Instrumentos (nombre, tipo, descripcion, imagen) VALUES (?, ?, ?, ?)',    // los "?" son para protegernos de droptables y otros códigos maliciosos de SQL que pueda ingresar el usuario
        [this.nombre, this.tipo, this.descripcion, this.imagen]);
    }

        // Este método servirá para devolver los objetos del almacenamiento persistene
    static fetchAll() {
        return db.execute('SELECT * FROM Instrumentos')
    }

    static fetchOne(ID_instrumento) {
        return db.execute('SELECT * FROM Instrumento WHERE id=?', [ID_instrumento]);
    }
}