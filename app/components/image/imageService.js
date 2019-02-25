import Image from "../../models/image.js"

// @ts-ignore
const imgApi = axios.create({
  baseURL: '//bcw-sandbox.herokuapp.com/api/images/',
  timeout: 3000
});

let _state = {
  image: {}
}
let _subscribers = {
  image: []
}

function _setState(prop, data) {
  _state[prop] = data
  _subscribers[prop].forEach(fn => fn())
}

export default class ImageService {

  addSubscriber(prop, fn) {
    _subscribers[prop].push(fn)
  }

  get Image() {
    return _state.image
  }

  getImage() {
    console.log("Getting the Image")
    imgApi.get('')
      .then(res => {
        console.log(res.data)
        let imgData = res.data.data
        imgData = new Image(res.data)
        _setState('image', imgData)
      })
  }
}