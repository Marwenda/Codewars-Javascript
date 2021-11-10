//Given: an array containing hashes of names
//Return: a string formatted as a list of names separated by commas 
//except for the last two names, which should be separated by an ampersand.

function list(names) {
    var Lista = "";

    for (let i = 0; i < names.length; i++) { // Recorremos todo el array dado.


        if (i < (names.length - 2)) { // Le decimos que a todas las posiciones que no sean LAS DOS ULTIMAS les ponga coma
            Lista += names[i].name + ", "

        } else if (i < (names.length - 1)) { //Le decimos que antes de la ULTIMA posicion meta un &
            Lista += names[i].name + " & "
        } else {
            Lista += names[i].name // Y que la ultima ponga solamente el nombre
        }
    }
    return String(Lista)
}

//OTRAS SOLUCIONES ENCONTRADAS EN INTERNET
var list = (names) => names.map(x => x.name).join(', ').replace(/(.*),(.*)$/, "$1 &$2")

//Otro TODO REVISAR PREV/CURRENT
function list(names) {
    return names.reduce(function(prev, curr, i, arr) {
        return prev + curr.name + (i < arr.length - 2 ? ', ' : i == arr.length - 2 ? ' & ' : '');
    }, '');
}
// OTRO
function list(names) {
    var result = "";
    var comma = ", ";
    var and = " & ";
    while (names.length) {
        result += names.shift().name;
        if (names.length == 1) {
            result += and;
        } else if (names.length > 1) {
            result += comma;
        }
    }

    return result;
}