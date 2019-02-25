import TodoService from "./todoService.js";

const _todoService = new TodoService()

function _drawTodos() {
  //WHAT IS MY PURPOSE? - check
  let todos = _todoService.Todos
  let template = ''
  todos.forEach(todo => {
    template += todo.getTemplate()
  })
  document.getElementById('todos').innerHTML = template
}

function _drawError() {
  console.error('[TODO ERROR]', _todoService.TodoError)
  //document.querySelector('#todo-error').textContent = `${_todoService.TodoError.message}`
  let error = _todoService.TodoError
  let template = ''
  error.forEach(error => {
    template += `<li>error</li>`
  })
}


export default class TodoController {
  constructor() {
    _todoService.addSubscriber('todos', _drawTodos)
    _todoService.addSubscriber('error', _drawError)
    _todoService.getTodos()
    // Don't forget to add your subscriber - check
  }

  addTodo(event) {

    event.preventDefault()
    let form = event.target
    let newTodo = {
      // DONT FORGET TO BUILD YOUR TODO OBJECT - check
      description: form.newTodo.value,

    }
    _todoService.addTodo(newTodo)
    form.reset()
  }

  toggleTodoStatus(todoId) {
    // asks the service to edit the todo status
    _todoService.toggleTodoStatus(todoId)
  }

  removeTodo(todoId) {
    // ask the service to run the remove todo with this id
    _todoService.removeTodo(todoId)
  }



}