export default class Weather {
  constructor(data) {
    console.log('RW WEATHER API DATA', data);
    this.city = data.name
    this.kelvin = data.main.temp
    this.celsius = Math.floor(data.main.temp - 273.15)
    this.fahrenheit = Math.floor((this.celsius * 9 / 5) + 32)
  }

  getTemplate() {
    return `
    <div><h6>Current temp in Boise: ${this.fahrenheit} F / ${this.celsius} C</h6></div>
    `
  }
}