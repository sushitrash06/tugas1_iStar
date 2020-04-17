let products = [{
        name: "Apel",
        type: "fruit"
    },
    {
        name: "Monitor",
        type: "Computer"
    },
    {
        name: "Mango",
        type: "fruit"
    },
    {
        name: "Table",
        type: "Furniture"
    },

];


console.log(products.some(produk => produk.type === "fruit"));