const sizesList = require('../decorator/sizes-list')

// напитки
const Espresso = require('./Espresso')
const HouseBlend = require('./HouseBlend')

// добавки
const Mocha = require('./Mocha')
const Soy = require('./Soy')
const Whip = require('./Whip')

const esp = new Mocha(new Soy(new Espresso()))

esp.setSize(sizesList.small)

console.log(esp)
console.log('===========')
console.log(esp.getDescription(), esp.getCost())
