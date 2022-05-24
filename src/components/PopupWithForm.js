import "../index.css";

function PopupWithForm(props) {
  return (
    <div className={`modal js-${props.name}-modal`}>
      <div className="modal__container">
        <form className="modal__box" name={props.name} noValidate>
          <h2 className="modal__profile">{props.title}e</h2>
          {props.children}

          <button
            type="submit"
            className="modal__button"
            aria-label={props.submit}
          >
            {props.submit}
          </button>
        </form>
        <button
          className="modal__close-button"
          type="button"
          aria-label="close"
        ></button>
      </div>
    </div>
  );
}

export default PopupWithForm;
//All I Did was add this reactDOM.render section which is the error.
// ReactDOM.render(
//   <>
//     <PopupWithForm name="edit" title="Edit Profile" submit="Save">
//       <label name="">
//         <input
//           id="name-input"
//           name="name"
//           type="text"
//           className="modal__input modal__input_profile_name"
//           placeholder="Name"
//           required
//           minLength="2"
//           maxLength="40"
//         />
//         <span id="name-input-error" className="modal__input-error"></span>
//       </label>
//       <label name="">
//         <input
//           id="title-input"
//           name="title"
//           type="text"
//           className="modal__input modal__input_profile_title"
//           placeholder="About me"
//           required
//           minLength="2"
//           maxLength="200"
//         />

//         <span id="title-input-error" className="modal__input-error"></span>
//       </label>
//     </PopupWithForm>
//   </>
// );
