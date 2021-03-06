//private
import Weather from "../../models/weather.js"

//@ts-ignore
const weatherApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/weather/",
  timeout: 3000
})

let _state = {
  weather: {}
}

let _subscribers = {
  weather: []
}

function setState(prop, data) {
  _state[prop] = data
  _subscribers[prop].forEach(fn => fn());
}

//public
export default class WeatherService {

  addSubscriber(prop, fn) {
    _subscribers[prop].push(fn)
  }

  get Weather() {
    return _state.weather
  }

  getApiWeather() {
    //debugger
    console.log('Calling the weatherman...')
    weatherApi.get('')
      .then(res => {
        console.log(res.data)
        let weatherData = res.data.data
        weatherData = new Weather(res.data)
        setState('weather', weatherData)
      })
  }
}
