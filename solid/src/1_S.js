// Single Responsibility Principle

// Сущность должна отвечать за единственную функцию.
// Сущность должна иметь единственную причина для существования.

class News {
  constructor(title, text) {
    this.title = title
    this. text = text
    this.modified = false
  }

  update (text) {
    this.text = text
    this.modified = true
  }

  // Так мы нарушим принцип

  // toHTML() {
  //   return `
  //     <div class="news">
  //       <h1>${this.title}</h1>
  //       <p>${this.text}</p>
  //     </div>
  //   `
  // }
}

class NewsPrinter {
  constructor(news) {
    this.news = news
  }

  html() {
    return `
      <div class="news">
        <h1>${this.news.title}</h1>
        <p>${this.news.text}</p>
      </div>
    `
  }

  json() {}

  xml() {}
}

const news = new News('title asdfs sr', 'text dfgd dfgsd dt')
const printer = new NewsPrinter(news)

console.log(printer.html())
