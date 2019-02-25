export default class Weather {
  constructor(data) {
    console.log('RW WEATHER API DATA', data);
    this.city = data.name
    this.kelvin = data.main.temp
    this.celsius = data.main.temp + 273.15
    this.fahrenheit = (this.celsius * 9 / 5) + 32
  }
}