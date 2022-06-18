import "../index.css";

function ImagePopup({ card, onClose }) {
  <div className={`modal js-preview-modal ${card ? "modal__is-opened" : ""}`}>
    <div className="modal__container modal__container_preview">
      <button
        className="modal__close-button"
        type="button"
        aria-label="close"
        onClick={onClose}
      />

      <img
        className="modal__preview-image"
        src={card ? card.link : ""}
        alt={card ? card.name : ""}
      />
      <p className="modal__preview-text">{card ? card.name : ""}</p>
    </div>
  </div>;
}
export default ImagePopup;
