function Parent(name, children) {
    this.name = name;
    this.children = children
}

Parent.prototype.sayHi = () => {
    console.log("hi hello")
}

Parent.prototype.getSurName = () => {
    console.log(this.name.split(" ")[1]);
}

function Child(name) {
    Parent.call(this, name)
}
let p1 = new Parent("s k" , 2);
console.log(p1.getSurName())

console.log(child1.prototype)

Child.prototype = Object.create(Parent.prototype)
console.log(child1.prototype)

let child1= new Child("sravi Sreekanth");
child1.getSurName();