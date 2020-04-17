function sum(...numbers) {
    console.log(numbers.reduce(function(x, y){
        return x * y;
    }));
}

sum(1, 2, 3, 4, 5);