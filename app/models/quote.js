export default class Quote {
  constructor(data) {
    this.id = data.id
    this.body = data.body
    this.author = data.author
  }
  getTemplate() {
    return `
    <h4>${this.body}</h4>
    <h6 id="author">${this.author}</h6>
      `
  }
}