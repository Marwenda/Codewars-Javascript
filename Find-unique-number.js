//There is an array with some numbers. All numbers are equal except for one. Try to find it!
//findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
//findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
//It’s guaranteed that array contains at least 3 numbers.
//The tests contain some very huge arrays, so think about performance.
//This is the first kata in series:
//Find the unique number (this kata)
//Find the unique string
//Find The Unique
function findUniq(arr) {
    let unico = ""; //Creamos la variable a devolver
    const ordenado = arr.sort(function(a, b) { return a - b }); //Ordenamos el array para que ponga cada numero igual junto
    for (let i = 0; i < arr.length; i++) { //Recorremos el array completo
        if (arr[i] !== arr[i + 1] & arr[i] !== arr[i - 1]) //Comprobamos que la posicino no sea igual a la siguiente o la anterior
            unico = arr[i] //Al no ser igual la guardamos.
    }
    return unico
}

//OTRAS SOLUCIONES
function findUniq(arr) {
    var map = {};
    for (var i = 0; i < arr.length; i++) {
        (arr[i] in map) ? map[arr[i]] += 1: map[arr[i]] = 1;
    }

    for (var key in map) {
        if (map[key] == 1) {
            return parseFloat(key);
        }
    }
}