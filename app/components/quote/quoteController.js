import QuoteService from "./quoteService.js";

const _qs = new QuoteService()

function _drawQuote() {
  let quote = _qs.Quote
  let template = ''
  template += quote.getTemplate()
  document.getElementById('quote').innerHTML = quote.getTemplate()
}

export default class QuoteController {
  constructor() {
    _qs.addSubscriber('quote', _drawQuote)
    _qs.getQuote()
  }
}