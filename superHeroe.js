class SuperHeroe{

    constructor(nombre){
        this.nombre = nombre;
    }


    getNombre(){
        return this.nombre
    }

    setNombre(nombre){
        this.nombre = nombre
    }

}
module.exports = new SuperHeroe("Batman");