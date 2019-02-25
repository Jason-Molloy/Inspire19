import WeatherController from "./components/weather/weatherController.js";
import TodoController from "./components/todo/todoController.js";

// HEY WHERE ARE ALL OF YOUR CONTROLLERS??
class App {
  constructor() {
    this.controllers = {
      //weatherController: new WeatherController(),
      todoController: new TodoController()
    }
  }
}

window['app'] = new App()  