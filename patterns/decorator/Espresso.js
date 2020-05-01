const sizesList = require('../decorator/sizes-list')
const AbstractBeverage = require('./AbstractBeverage')

// конкретный напиток
module.exports = class extends AbstractBeverage {
  description = 'Espresso'

  getCost() {
    switch (this.getSize()) {
      case sizesList.small:
        return .8
      case sizesList.medium:
        return 1.6
      case sizesList.big:
        return 2
    }
  }
}
