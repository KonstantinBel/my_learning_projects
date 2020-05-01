module.exports = class {
  constructor(coffeeFactory) {
    this.factory = coffeeFactory
  }

  makeCoffee(Beverage, condiments = [], size) {
    this.coffee = this.factory.createCoffee(Beverage, condiments, size)
  }

  getCoffee() {
    return this.coffee
  }

  printCheck() {
    console.log('your coffee:', this.coffee.getDescription(), this.coffee.getCost())
  }
}
