import "../index.css";

function ImagePopup() {
  <div className="modal js-preview-modal">
    <div className="modal__container modal__container_preview">
      <button
        className="modal__close-button"
        type="button"
        aria-label="close"
      ></button>
      <img className="modal__preview-image" src="" alt="" />
      <p className="modal__preview-text"></p>
    </div>
  </div>;
}
export default ImagePopup;
