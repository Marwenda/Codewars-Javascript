// Write a function that takes an integer as input, and returns the 
//number of bits that are equal to one in the binary representation of 
//that number. You can guarantee that input is non-negative.

//Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

var countBits = function(n) {

    let Binary = parseInt(n); //Convertimos n en int
    let Result = Binary.toString(2); //Lo convertimos en un String de binarios
    let Ones = Result.replace(/[^1]/g, "").length; //Creamos un nuevo String reemplazando todos los 
    //que empiezen por 1 por un vacio y medimos cuantos hay.

    return parseInt(Ones) // lo convertimos a Int y ya esta.

};

//SOLUCIONES de la gente parecidas.
var countBits = function(n) {
    return n.toString(2).replace(/0/g, '').length;
};


var countBits = function(n) {
    return n !== 0 ? n.toString(2).match(/1/g).length : 0;
};