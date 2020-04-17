var a = 12;
const c = 13;

var a = 13;
let d = "Halo"; {
    let d = "Halo Juga";
    const c = 14;
    console.log('lokal c: ' + c);
    console.log(d);
}
console.log(a);
console.log(c);