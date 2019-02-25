import WeatherController from "./components/weather/weatherController.js";
import TodoController from "./components/todo/todoController.js";
import QuoteController from "./components/quote/quoteController.js";
import ImageController from "./components/image/imageController.js";

// HEY WHERE ARE ALL OF YOUR CONTROLLERS??
class App {
  constructor() {
    this.controllers = {
      weatherController: new WeatherController(),
      todoController: new TodoController(),
      quoteController: new QuoteController(),
      imageController: new ImageController()
    }
  }
}

window['app'] = new App()  