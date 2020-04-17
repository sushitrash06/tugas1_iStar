module.paths = ['./'];
var aritmatika = require('aritmatika');
var aritmatika = require('./aritmatika');

var a = 10,
    b = 3;
console.log(`${a} + ${b} = ` + aritmatika.tambah(a, b));
console.log(`${a} - ${b} = ` + aritmatika.kurang(a, b));
console.log(`${a} * ${b} = ` + aritmatika.kali(a, b));
console.log(`${a} / ${b} = ` + aritmatika.bagi(a, b));