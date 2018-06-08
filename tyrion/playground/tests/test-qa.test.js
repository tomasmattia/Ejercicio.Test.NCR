// tyrion/playground/tests/test-qa.test.js

const { guarantee, check, xcheck, group } = require('tyrion');
const solucion = require('../src/test-qa.original');
const solucionCorregida = require('../src/test-qa.corregido')

group('solucion', () => {
  group('method: solution', () => {
    check('La cantidad de veces retornada por la funcion coincide', () => {
        guarantee(solucion.solution("hola, que buena ola Laomir", "OAL"),3);
    });
    check('La cantidad de veces retornada por la funcion coincide', () => {
        guarantee(solucion.solution("hello", "Hello"),1);
    });
    check('La cantidad de veces retornada por la funcion coincide', () => {
        guarantee(solucion.solution("zyxwvutsrqponmlkjihgfedcba", "qrstu"),1);
    });
    check('La cantidad de veces retornada por la funcion coincide', () => {
        guarantee(solucion.solution("Mary", "Army"),1);
    });
    check('La cantidad de veces retornada por la funcion coincide', () => {
        guarantee(solucion.solution("Alien", "line"),1);
    });
  });
});

group('solucionCorregida', () => {
    group('method: solution', () => {
        check('La cantidad de veces retornada por la funcion coincide', () => {;
            guarantee(solucionCorregida.solution("hola, que buena ola Laomir", "OAL"),3);
            
        });
        check('La cantidad de veces retornada por la funcion coincide', () => {
            guarantee(solucionCorregida.solution("hello", "Hello"),1);
        });
        check('La cantidad de veces retornada por la funcion coincide', () => {
            guarantee(solucionCorregida.solution("zyxwvutsrqponmlkjihgfedcba", "qrstu"),1);
        });
        check('La cantidad de veces retornada por la funcion coincide', () => {
            guarantee(solucionCorregida.solution("Mary", "Army"),1);
        });
        check('La cantidad de veces retornada por la funcion coincide', () => {
            guarantee(solucionCorregida.solution("Alien", "line"),1);
        });
    });
});