var ayam = [
    { jenis : 'kampung',population:1000},
    { jenis : 'boiler',population:2000}
];
var sum = ayam.reduce(function(val, element){
    return val + element.population;
}, 0);
console.log(sum);