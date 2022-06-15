import "../index.css";
import React from "react";
import PopupWithForm from "./PopupWithForm";
// import { CurrentUserContext } from "../contexts/CurrentUserContext";

function AddPlacePopup(props) {
  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");

  function handleName(e) {
    setName(e.target.value);
  }
  function handleLink(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlaceSubmit({
      name,
      link,
    });
    props.onClose();
  }

  return (
    <PopupWithForm
      name="add"
      title="New Place"
      submitBtnText="Create"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        id="place-input"
        name="name"
        onChange={handleName}
        type="text"
        className="modal__input modal__input_image_title"
        placeholder="Title"
        required
        minLength="1"
        maxLength="30"
      />
      <span id="place-input-error" className="modal__input-error"></span>
      <input
        id="url-input"
        name="link"
        onChange={handleLink}
        type="url"
        className="modal__input modal__input_image_link"
        placeholder="Image link"
        required
      />
      <span id="url-input-error" className="modal__input-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
