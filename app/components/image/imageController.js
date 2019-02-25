import ImageService from "./imageService.js";

const _is = new ImageService()

function _drawImage() {
  let image = _is.Image
  let template = ''
  image.forEach(image => {
    //template += image.getTemplate()
    document.getElementById('bg-image').setAttribute('background', image.getTemplate())
  })
}

export default class ImageController {
  constructor() {
    _is.addSubscriber('image', _drawImage)
    _is.getImage()
  }

}

