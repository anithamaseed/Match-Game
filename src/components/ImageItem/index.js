import './index.css'

const ImageItem = props => {
  const {imageItem, onClickImage} = props
  const {id, thumbnailUrl} = imageItem

  const onClickImageItem = () => {
    onClickImage(id)
  }

  return (
    <li className="image-item">
      <button
        type="button"
        className="image-item-button"
        onClick={onClickImageItem}
      >
        <img
          src={thumbnailUrl}
          alt="thumbnail"
          className="thumbnail-img-size"
        />
      </button>
    </li>
  )
}
export default ImageItem
