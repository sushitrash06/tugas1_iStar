var readline = require('readline-sync'); 
class Segitiga {
    constructor(a, t) {
        this.alas=a;
         this.tinggi=t;
        // mendefinisikan properti this.alas = a; this.tingi = t;
    } 
    luas() { 
        return this.alas * this.tinggi / 2;
    }
    static buatObjek(a,t){
        return new Segitiga(a,t);
        // metode statis static bautObjek(a, t) { return new Segitiga(a, t);
    }
    }
    var a = parseFloat(readline.question(' Masukan nilai a: '));
    var t = parseFloat(readline.question(' Masukan nilai b: '));
    var obj = new Segitiga(a, t);
    // membaca data alas dan tinggi var a = parseFloat(readline.question(' Masukan alas: ')); var t = parseFloat(readline.question(' Masukan tinggi: '));
    // memanggil metode statis var obj = Segitiga.buatObjek(a, t);
    console.log(' \nSetelah nilai properti diubah '); 
    console.log(`obj.alas\t: ${obj.alas}`); 
    console.log(` obj.tinggi\t: ${obj.tinggi} `); 
    console.log('obj.luas\t:' +obj.luas() );
   
    