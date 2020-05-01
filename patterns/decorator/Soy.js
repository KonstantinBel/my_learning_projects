const sizesList = require('../decorator/sizes-list')
const AbstractCondimentDecorator = require('./AbstractCondimentDecorator')

// конкретная добавка

module.exports = class extends AbstractCondimentDecorator {
  description = 'Soy'
  
  getCost() {
    switch (this.getSize()) {
      case sizesList.small:
        return this.beverage.getCost() + .11
      case sizesList.medium:
        return this.beverage.getCost() + .22
      case sizesList.big:
        return this.beverage.getCost() + .33
    }
  }
}
