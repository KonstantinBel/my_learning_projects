const sizesList = require('../decorator/sizes-list')
const AbstractBeverage = require('./AbstractBeverage')

// конкретный напиток
module.exports = class extends AbstractBeverage {
  description = 'House Blend Coffee'

  getCost() {
    switch (this.getSize()) {
      case sizesList.small:
        return .5
      case sizesList.medium:
        return 1
      case sizesList.big:
        return 1.5
    }
  }
}
