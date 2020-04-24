function People(name,age,hobby){
    this.name=name;
    this.age=age;
    this.hobby=hobby;
}

People.prototype.introMyself = function(){
    setTimeout(() => {
        console.log(`Hello! nama saya ${this.name}, umur saya ${this.age}.`)
        console.log(`Hobby saya adalah ${this.hobby}`)
    }, 300)
}
const programmer = new People("John",18,["coding","read book","Ping pong"]);
programmer.introMyself();