var total = [1, 2, 3, 4, 5].reduce(function (previous, current, index) {
    var val = previous + current;
    console.log("The Previous value is " + previous +
        "; the current value is " + current +
        ", and the current iteration is " + (index));
    return val;
}, 0);

console.log("The loop is done, and the final value is " + total + ".");