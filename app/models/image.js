export default class Image {
  constructor(data) {
    this.url = data.url
    this.id = data.id
  }
  getTemplate() {
    return `
    ${this.url}
    `
  }
}
