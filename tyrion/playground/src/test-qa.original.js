
// tyrion/playground/src/test-qa.original.js

const solucion = {solution,esAnagrama};

function solution(a, b) { 
    var cantidad = 0;
    // Antes de comparar las palabras se deberian pasar todas sus letras a minuscula o mayuscula
    for (var i = 0; i <= a.length - b.length; i++) {
        var sub = a.substr(i, b.length);
        if (esAnagrama(sub, b))
            cantidad++;
    }
    return cantidad;
}
function esAnagrama(palabra, anagrama) {
    var primera = palabra.split('').sort();
    var segunda = palabra.split('').sort(); // Aca se deberia utilizar la variable anagrama pasada por parametro
    return primera.join('') == segunda.join('') // Aca falta ';' igualmente no genera un error en tiempo de ejecucion 
}

module.exports = solucion;

