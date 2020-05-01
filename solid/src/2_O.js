// Open Close Principle

// Код должен быть открыт для расширения, но закрыт для изменения.
// Сущность должна иметь единственную причину для изменения.

// в качестве решения создадим общий интерфейс
class Shape {
  area() {
    throw new Error('Aria method should be implemented')
  }
}

class Square extends Shape {
  constructor(size) {
    super()
    this.type = 'square'
    this.size = size
  }

  area() {
    return this.size ** 2
  }
}

class Circle  extends Shape {
  constructor(radius) {
    super()
    this.type = 'circle'
    this.radius = radius
  }

  area() {
    return (this.radius ** 2) * Math.PI
  }
}

class Rect extends Shape {
  constructor(w, h) {
    super()
    this.type = 'rect'
    this.w = w
    this.h = h
  }

  area() {
    return this.w *this.h
  }
}

class AriaCalc {
  constructor(shapes = []) {
    this.shapes = shapes
  }

  sum() {
    return this.shapes.reduce((acc, shape) => {
      return acc + shape.area()

      // ... на каждую фигуру приходится создавать класс и
       // вносить изменения в калькулятор (это нарушает принцип)

      // if (shape.type === 'circle') {
      //   return acc + (shape.radius ** 2) * Math.PI
      // }

      // if (shape.type === 'square') {
      //   return acc + shape.size ** 2
      // }

      // if (shape.type === 'rect') {
      //   return acc + shape.w *shape.h
      // }
    }, 0)
  }
}

const calc = new AriaCalc([
  new Square(4),
  new Circle(3),
  new Rect(3, 5)
])

console.log(calc.sum())
