export default class Todo {
  constructor(data) {
    this._id = data._id
    this.completed = data.completed
    this.user = data.user
    this.description = data.description
  }
  getTemplate() {
    if (this.completed) {
      return `
    <li><del>${this.description}</del><input type="checkbox" name="complete" value="${this.completed}" 
    <button onclick="app.controllers.todoController.toggleTodoStatus('${this._id}')">Review</button>
    <button class="btn btn-outline-danger btn-sm" onclick="app.controllers.todoController.removeTodo('${this._id}')">Remove</button></li>
    `
    } else {
      return `
    <li>${this.description}<input type="checkbox" name="complete" value="${this.completed}" 
    <button onclick="app.controllers.todoController.toggleTodoStatus('${this._id}')">Complete</button>
    <button class="btn btn-outline-danger btn-sm" onclick="app.controllers.todoController.removeTodo('${this._id}')">Remove</button></li>
    `
    }
  }
}