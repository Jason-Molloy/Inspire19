import Todo from "../../models/todo.js";

// @ts-ignore
const todoApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/molloy/todos/',
  timeout: 3000
});

let _state = {
  todos: [],
  error: {},
}
let _subscribers = {
  todos: [],
  error: []
}

function _setState(prop, data) {
  _state[prop] = data
  _subscribers[prop].forEach(fn => fn())
}

export default class TodoService {
  get TodoError() {
    return _state.error
  }

  get Todos() {
    return _state.todos.map(t => new Todo(t))
  }

  addSubscriber(prop, fn) {
    _subscribers[prop].push(fn)
  }

  getTodos() {
    console.log("Getting the Todo List")
    todoApi.get('')
      .then(res => {
        console.log(res.data.data)
        // WHAT DO YOU DO WITH THE RESPONSE? - check
        let toDoData = res.data.data.map(t => new Todo(t))
        _setState('todos', toDoData)
      })
      .catch(err => _setState('error', err.response.data))
  }

  addTodo(rawToDo) {
    let newTodo = new Todo(rawToDo)
    todoApi.post('', newTodo)
      .then(res => {
        // WHAT DO YOU DO AFTER CREATING A NEW TODO? - check
        this.getTodos()
      })
      .catch(err => _setState('error', err.response.data))
  }

  toggleTodoStatus(todoId) {
    //debugger
    let todo = _state.todos.find(todo => todo._id == todoId)
    // Be sure to change the completed property to its opposite
    // todo.completed = !todo.completed <-- THIS FLIPS A BOOL
    todo.completed = !todo.completed
    todoApi.put(todoId, todo)
      .then(res => {
        //DO YOU WANT TO DO ANYTHING WITH THIS? - check
        this.getTodos()
      })
      .catch(err => _setState('error', err.response.data))
  }

  removeTodo(id) {
    // This one is on you to write.... 
    // The http method is delete at the todoId - check
    todoApi.delete(id)
      .then(res => {
        this.getTodos()
      })
  }

}