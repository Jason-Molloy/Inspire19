export default class Quote {
  constructor(data) {
    this.id = data.quote.id
    this.body = data.quote.body
    this.author = data.quote.author
  }
  getTemplate() {
    return `
    <h4>${this.body}</h4>
    <h6>${this.author}</h6>
      `
  }
}