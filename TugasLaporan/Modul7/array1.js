var readline = require('readline-sync');
var n = parseInt(readline.question('Masukan jumlah data: '));
var a = new Array();
var total = 0.0;
for (let i = 0; i < n; i++) {
    a[i] = parseFloat(readline.question(`Data ke-${i+1}: `));
    total += a[i];
}
var rataRata = total / a.length;
console.log(`\nIsi array a: [${a}]`);
console.log(`Total: [${total}]`);
console.log(`Rata-rata: [${rataRata}]`);