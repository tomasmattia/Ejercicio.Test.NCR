
// tyrion/playground/src/test-qa.original.js

const solucionCorregida = {solution,esAnagrama};

function solution(a, b) 
{
	a = a.toLowerCase();
	b = b.toLowerCase();
    var cantidad = 0;
    for (var i = 0; i <= a.length - b.length; i++) {
        var sub = a.substr(i, b.length);
        if (esAnagrama(sub, b))
            cantidad++;
    }
    return cantidad;
}

function esAnagrama(palabra, anagrama)
{
    var primera = palabra.split('').sort();
    var segunda = anagrama.split('').sort();
    return primera.join('') == segunda.join('');
}

module.exports = solucionCorregida;
