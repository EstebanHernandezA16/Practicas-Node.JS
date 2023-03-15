//require ('./modulo1')//Al usar el require, se ejecuta primero el archivo modulo1, luego vuelve a console.log, de ahi el orden de los logs
//require('./superman');
//require('./batman');

//require('./moduloEnvuelto');



//console.log("Pasé por index");

const SuperHeroe = require('./superHeroe');

console.log(SuperHeroe.getNombre());
SuperHeroe.setNombre("Superman");
console.log(SuperHeroe.getNombre());

const NuevoSuperHeroe = require('./superHeroe');//la razón del porque aqui no se devuelve al module.exports y por lo tanto nos daria como resultado batman es porque node.js al ser importando o requerido una vez, no vuelve al modulo y sigue a la siguiente linea, esto se conoce como que el modulo ha sido "Atrapado/cached" y lo guarda en la memoria cache

   console.log(NuevoSuperHeroe.getNombre());