import "../index.css";
import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
  const CurrentUser = React.useContext(CurrentUserContext);

  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  function handleName(e) {
    setName(e.target.value);
  }
  function handleDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name,
      about: description,
    });
  }
  React.useEffect(() => {
    setName(CurrentUser.name);
    setDescription(CurrentUser.about);
  }, [CurrentUser]);

  return (
    <PopupWithForm
      name="edit"
      title="Edit profile"
      submitBtnText="Save"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={props.handleUpdateUser}
    >
      <label name="">
        <input
          id="name-input"
          name="name"
          onChange={handleName}
          type="text"
          className="modal__input modal__input_profile_name"
          placeholder={CurrentUser.name}
          required
          minLength="2"
          maxLength="40"
        />
        <span id="name-input-error" className="modal__input-error"></span>
      </label>
      <label name="">
        <input
          id="title-input"
          name="title"
          onChange={handleDescription}
          type="text"
          className="modal__input modal__input_profile_title"
          placeholder={CurrentUser.about}
          required
          minLength="2"
          maxLength="200"
        />

        <span id="title-input-error" className="modal__input-error"></span>
      </label>
    </PopupWithForm>
  );
}
export default EditProfilePopup;
