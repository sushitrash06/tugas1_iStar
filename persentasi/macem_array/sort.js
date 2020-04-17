const penghasilan = [5000,4000,3000,7000,8000]
const nama = ['dadang','inul','panca','willy','wariman']

const descOrder = penghasilan.sort((a, b) => a > b ? 1 : -1);
console.log(descOrder);

const ascOrder = nama.sort((a, b) => a > b ? -1 : 1);
console.log(ascOrder);