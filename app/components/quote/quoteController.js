import QuoteService from "./quoteService.js";

let _qs = new QuoteService()

function _drawQuote() {
  let quote = _qs.Quote
  let template = ''
  quote.forEach(q => {
    template += q.getTemplate()
  })
  document.getElementById('quote').innerHTML = template
}

export default class QuoteController {
  constructor() {
    _qs.getQuote()
  }
}