class Car {
  constructor (brand) {
    this.brand = brand;
  }
  present() {
    return `I have a ${this.brand}`;
  }
}

class Model extends Car {
  constructor (brand, model) {
    super(brand);
    this.model = model;
  }

  show() {
    return `${this.present()}, it is a ${this.model}`;
  }
}

console.log(new Model("lambo", "calarado").show());


class Animal {
  constructor (name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor (name, breed) {
    super(name);
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} barks.`);
  }

  breedInfo() {
    console.log(`${this.name} is a ${this.breed}.`);
  }
}

const dog = new Dog('Fido', 'Labrador');
dog.speak(); // logs 'Fido barks.'
dog.breedInfo(); // logs 'Fido is a Labrador.'
