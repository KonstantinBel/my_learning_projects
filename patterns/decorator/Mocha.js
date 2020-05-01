const sizesList = require('../decorator/sizes-list')
const AbstractCondimentDecorator = require('./AbstractCondimentDecorator')

// конкретная добавка

module.exports = class extends AbstractCondimentDecorator {
  description = 'Mocha'
  
  getCost() {
    switch (this.getSize()) {
      case sizesList.small:
        return this.beverage.getCost() + .1
      case sizesList.medium:
        return this.beverage.getCost() + .2
      case sizesList.big:
        return this.beverage.getCost() + .3
    }
  }
}
