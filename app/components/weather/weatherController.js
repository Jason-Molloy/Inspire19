import WeatherService from "./weatherService.js";

var _ws = new WeatherService()

function drawWeather() {
  console.log("THE WEATHER MAN SAYS:", _ws.Weather)
  let weather = _ws.Weather
}

export default class WeatherController {

  constructor() {
    _ws.addSubscriber('weather', drawWeather)
    _ws.getApiWeather()
  }

  getWeather() {
    _ws.getApiWeather()
  }
}