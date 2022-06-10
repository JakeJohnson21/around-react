import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  return (
    <PopupWithForm
      name="pic"
      title="Edit profile pic"
      submitBtnText="Save"
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <label name="">
        <input
          id="pic-input"
          name="link"
          type="url"
          className="modal__input modal__input_edit_pic"
          placeholder="link"
          required
        />
        <span id="url-input-error" className="modal__input-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
