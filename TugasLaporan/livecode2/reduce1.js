var numbers = [1, 2, 3, 4, 5];
var total = 0;

numbers.forEach(function (number) {
    console.log(total += number);
});

numbers.forEach(function (number) {
    test = total += number;
});

var total2 = [1, 2, 3, 4, 5].reduce(function (previous, current) {
    return previous + current;
}, 0);

console.log(test);
console.log(total2);