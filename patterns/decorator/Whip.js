const sizesList = require('../decorator/sizes-list')
const AbstractCondimentDecorator = require('./AbstractCondimentDecorator')

// конкретная добавка

module.exports = class extends AbstractCondimentDecorator {
  description = 'Whip'
  
  getCost() {
    switch (this.getSize()) {
      case sizesList.small:
        return this.beverage.getCost() + .2
      case sizesList.medium:
        return this.beverage.getCost() + .4
      case sizesList.big:
        return this.beverage.getCost() + .6
    }
  }
}
