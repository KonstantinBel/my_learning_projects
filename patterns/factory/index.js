const sizesList = require('../decorator/sizes-list')
const beveragesList = require('../decorator/beverages-list')
const condimentsList = require('../decorator/condiments-list')
const CoffeeStore = require('./CoffeeStore')
const SimpleCoffeeFactory = require('./SimpleCoffeeFactory')

const simpleCoffeeFactory = new SimpleCoffeeFactory()
const coffeeStore = new CoffeeStore(simpleCoffeeFactory)

coffeeStore.makeCoffee(
  beveragesList.houseBlend,
  [condimentsList.soy, condimentsList.whip, condimentsList.mocha],
  sizesList.big
)

console.log(coffeeStore.getCoffee())

coffeeStore.printCheck()
