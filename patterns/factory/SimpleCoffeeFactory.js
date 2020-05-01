class SimpleCoffeeFactory {
  createCoffee(Beverage, condiments = [], size) {
    let beverage = new Beverage()
    condiments.forEach(Condiment => { beverage = new Condiment(beverage) })
    size && beverage.setSize(size)
    return beverage
  }
}

module.exports = SimpleCoffeeFactory

