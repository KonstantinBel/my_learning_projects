// абстрактный супер класс напитка

module.exports = class {
  description = 'Unknown Beverage'
  size = undefined

  setSize(size) {
    this.size = size
  }

  getSize() {
    return this.size
  }

  getDescription() {
    return this.description
  }

  getCost() {
    throw new Error('method cost not implemented')
  }
}
