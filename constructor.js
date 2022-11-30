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