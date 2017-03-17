function Animal() { }

Animal.prototype.speak = function() {
  console.log(this);
  return this;
}

Animal.eat = function() {
  console.log(this);
  return this;
}

let obj = new Animal();
obj.speak();
//speak(); // global object

obj.eat();
//eat(); // global object
