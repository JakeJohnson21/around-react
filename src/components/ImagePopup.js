import "../index.css";

function ImagePopup(props) {
  <div
    className={`modal js-preview-modal ${
      props.isOpen ? "modal__is-opened" : ""
    }`}
  >
    <div className="modal__container modal__container_preview">
      <button className="modal__close-button" type="button" aria-label="close">
        {props.onClose}
      </button>
      <img className="modal__preview-image" src="" alt="" />
      <p className="modal__preview-text"></p>
    </div>
  </div>;
}
export default ImagePopup;
