function addProduct (name,category){
    return{
        name,
        category
    }
}
var getProducts = addProduct("Iphone","samsung");

console.log `Product ${getProducts.name} Category ${getProducts.category}`;