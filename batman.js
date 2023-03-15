const superH = "batman";//El objetivo de este ejercicio es verificar que a raiz de ser modulos locales batman y superman(son cajas aparte gracias a node.js) se puede lograr una ejecucion con la misma constante pero que a la vez el console.log sea distinto.
//esto se logra gracias al scope(Enfoque) termino el cual ha comentado J.J gallego, tambien funciona con funciones pero con la siguiente syntax
/* Ejemplo de Funcion con scope propio(Funcion Wrapped ó envuelta)
(function(){

})();
 */
//console.log("Im "+superH)