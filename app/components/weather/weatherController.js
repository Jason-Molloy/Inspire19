import WeatherService from "./weatherService.js";

var _ws = new WeatherService()

function drawWeather() {
  console.log("THE WEATHER MAN SAYS:", _ws.Weather)
  let weather = _ws.Weather
  let template = ''
  template += weather.getTemplate()
  document.getElementById('weather').innerHTML = weather.getTemplate()
}

export default class WeatherController {

  constructor() {
    _ws.addSubscriber('weather', drawWeather)
    _ws.getApiWeather()
  }

}