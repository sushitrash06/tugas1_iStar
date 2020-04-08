var readline = require('readline-sync')
var a = readline.question('Masukan nilangan bulat ');
var b = readline.question('Masukan Tipe data Rill ')
hasila = typeof(a);
hasilb = typeof(b);
console.log('Tipe data sebelum di konfersi');
console.log('Tipe data a : '+hasila);
console.log('Tipe data b : '+hasilb);
console.log('Tipe data setelah di konfersi');
hasil1 = parseInt(a);
hasil2 = parseInt(b);
hasila = typeof(hasil1);
hasilb = typeof(hasil2);
console.log('Tipe data setelah di ubah : '+hasila);
console.log('Tipe data setelah di ubah : '+hasilb);