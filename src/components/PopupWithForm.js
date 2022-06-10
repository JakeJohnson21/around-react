import "../index.css";

function PopupWithForm(props) {
  return (
    <div
      className={`modal js-${props.name}-modal ${
        props.isOpen ? "modal__is-opened" : ""
      } `}
    >
      {
        <div className="modal__container">
          <form className="modal__box" name={props.name} noValidate>
            <h2 className="modal__profile">{props.title}</h2>
            {props.children}

            <button
              type="submit"
              className="modal__button"
              aria-label={props.submitBtnText}
              onClick={props.onSubmit}
            >
              {props.submitBtnText}
            </button>
          </form>
          <button
            className="modal__close-button"
            type="button"
            aria-label="close"
            onClick={props.onClose}
          ></button>
        </div>
      }
    </div>
  );
}

export default PopupWithForm;
