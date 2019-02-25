import Quote from "../../models/quote.js"
// @ts-ignore
const _quoteApi = axios.create({
  baseURL: '//bcw-sandbox.herokuapp.com/api/quotes/',
  timeout: 3000
});

let _state = {
  quote: []
}
let _subscribers = {
  quote: []
}

function _setState(prop, data) {
  _state[prop] = data
  _subscribers[prop].forEach(fn => fn())
}

export default class QuoteService {
  get Quote() {
    return _state.quote.map(q => new Quote(q))
  }

  getQuote() {
    console.log("Getting the Quote")
    _quoteApi.get('')
      .then(res => {
        console.log(res.data.quote)
        // WHAT DO YOU DO WITH THE RESPONSE? - check
        let quoteData = new Quote(res.data.quote)
        _setState('quote', quoteData)
      })
  }
}