const AbstractBeverage = require('./AbstractBeverage')

// абстрактный класс добавок

module.exports = class extends AbstractBeverage {
  constructor(beverage) {
    super()
    this.beverage = beverage
  }

  setSize(size) {
    this.size = size
    this.beverage.setSize(size)
  }

  getDescription() {
    return `${this.beverage.getDescription()}, ${this.description}`
  }
}
