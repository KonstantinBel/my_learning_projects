// Interface segregation principle


// Клиенты не должны зависеть от методов, которые они не используют.
// Интерфейсы нужно разделять так что-бы сущности не
// знали о существовании неиспользуемых методов.
// Толстые интефейсы являются плохой практикой, т.к. заставляют
// задумываться о неиспользуемых методах при работе с конкретными классами

// Нарушения принципа
// class Animal {
//   constructor(name) {
//     this.name = name
//   }

//   walk() {
//     console.log(this.name, 'can walk')
//   }

//   swim() {
//     console.log(this.name, 'can swim')
//   }

//   fly() {
//     console.log(this.name, 'can fly')
//   }
// }

// class Dog extends Animal {
//   // приходится отменять методы, это лишний функционал
//   fly() {
//     return null
//   }
// }

// class Eagle extends Animal {
//   swim() {
//     return null
//   }
// }

// class Whale extends Animal {
//   walk() {
//     return null
//   }

//   fly() {
//     return null
//   }
// }

// const dog = new Dog('Собачка')
// dog.walk()
// dog.swim()
// dog.fly()

// const eagle = new Eagle('Орел')
// eagle.walk()
// eagle.swim()
// eagle.fly()

// const whale = new Whale('Кит')
// whale.walk()
// whale.swim()
// whale.fly()

// Соблюдение принципа
// нет лишнего поведения
class Animal {
  constructor(name) {
    this.name = name
  }
}

const swimmer = {
  swim() {
    console.log(this.name, 'can swim')
  }
}

const walker = {
  walk() {
    console.log(this.name, 'can walk')
  }
}

const flier = {
  fly() {
    console.log(this.name, 'can fly')
  }
}

class Dog extends Animal {}
Object.assign(Dog.prototype, swimmer, walker)

class Eagle extends Animal {}
Object.assign(Eagle.prototype, flier, walker)

class Whale extends Animal {}
Object.assign(Whale.prototype, swimmer)

const dog = new Dog('Собачка')
dog.walk()
dog.swim()

const eagle = new Eagle('Орел')
eagle.walk()
eagle.fly()

const whale = new Whale('Кит')
whale.swim()
