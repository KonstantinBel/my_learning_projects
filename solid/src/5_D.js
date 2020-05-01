// Dependency inversion principle

// Модули верхних уровней не должны зависеть от модулей нижних уровней.
// Оба типа модулей должны зависеть от абстракций.
// Абстракции не должны зависеть от деталей.
// Детали должны зависеть от абстракций.

// // Нарушение принципа

// // сначала нужен был только один способ получать данные
// class Fetch {
//   request(url) {
//     // return fetch(url).then(n => n.json())
//     return Promise.resolve('data from fetch', url)
//   }
// }

// // но допустим нас попросили научится брать данные из локал сторэджа
// class LocalStorage {
//   get(key) {
//     const dataFromLocalStorage = 'data from local storage ' + key
//     return dataFromLocalStorage
//   }
// }

// // класс зависит от реализаций других классов
// class DataBase {
//   constructor() {
//     // на придется внести изменения
//     // this.fetch = new Fetch()
//     this.localStorage = new LocalStorage()
//   }

//   getData() {
//     // и тут изменения
//     // return this.fetch.request('vk.com')
//     return this.localStorage.get('ls key')
//   }
// }

// const db = new DataBase()

// console.log(db.getData())

// Соблюдение принципа

class Fetch {
  request(url) {
    // return fetch(url).then(n => n.json())
    return Promise.resolve('data from fetch', url)
  }
}

class LocalStorage {
  get(key) {
    const dataFromLocalStorage = 'data from local storage ' + key
    return dataFromLocalStorage
  }
}

// реализуем метод clientGet
class FetchClient {
  constructor() {
    this.fetch = new Fetch()
  }

  clientGet() {
    return this.fetch.request()
  }
}

// реализуем метод clientGet
class LocalStorageClient {
  constructor() {
    this.localStorage = new LocalStorage()
  }

  clientGet() {
    return this.localStorage.get()
  }
}

class DataBase {
  constructor(client) {
    this.client = client
  }

  getData() {
    return this.client.clientGet('ls key')
  }
}

const dbFetch = new DataBase(new FetchClient())
const dbLocalStorage = new DataBase(new LocalStorageClient())

console.log(dbFetch.getData())
console.log(dbLocalStorage.getData())

