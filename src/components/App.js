import "../index.css";
import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  function handleCardClick() {}
  //________________________________________________________________________//
  // MY ATTEMPT AT SETTING THE STATE VARIABLES FOR THE POPUP VISIBILITY
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);

  function handleEditAvatarClick() {
    setIsEditProfilePopupOpen(true);
    // const AvatarBtn = document.querySelector(".js-pic-modal");
    // AvatarBtn.classList.add("modal__is-opened");
  }
  function handleEditProfileClick() {
    setIsAddPlacePopupOpen(true);
    // const ProfileBtn = document.querySelector(".js-edit-modal");
    // ProfileBtn.classList.add("modal__is-opened");
  }
  function handleAddPlaceClick() {
    setIsEditAvatarPopupOpen(true);
    // const cardBtn = document.querySelector(".js-add-modal");
    // cardBtn.classList.add("modal__is-opened");
  }

  //________________________________________________________________________//
  //

  return (
    <div className="App">
      <section className="page">
        <Header />
        <Main
          onEditAvatarClick={handleEditAvatarClick}
          onEditProfileClick={handleEditProfileClick}
          onAddPlaceClick={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <ImagePopup />
        <PopupWithForm
          name="pic"
          title="Edit profile pic"
          submit="Save"
          isOpen={isEditAvatarPopupOpen}
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
        <PopupWithForm
          name="delete"
          title="Are you sure?"
          submit="Yes"
        ></PopupWithForm>
        <PopupWithForm
          name="edit"
          title="Edit profile"
          submit="Save"
          isOpen={isEditProfilePopupOpen}
        >
          <label name="">
            <input
              id="name-input"
              name="name"
              type="text"
              className="modal__input modal__input_profile_name"
              placeholder="Name"
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
              type="text"
              className="modal__input modal__input_profile_title"
              placeholder="About me"
              required
              minLength="2"
              maxLength="200"
            />

            <span id="title-input-error" className="modal__input-error"></span>
          </label>
        </PopupWithForm>
        <PopupWithForm
          name="add"
          title="New Place"
          submit="Create"
          isOpen={isAddPlacePopupOpen}
        >
          <input
            id="place-input"
            name="name"
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
            type="url"
            className="modal__input modal__input_image_link"
            placeholder="Image link"
            required
          />
          <span id="url-input-error" className="modal__input-error"></span>
        </PopupWithForm>
        <template id="card-template">
          <div className="card__item">
            <img className="card__image" src=" " alt="" />
            <img id="trash-svg" alt="trash icon" className="card__trash" />
            <div className="card__text">
              <h2 className="card__place">a</h2>
              <div className="card__like">
                <button
                  className="card__like-button"
                  type="button"
                  aria-label="like"
                ></button>
                <p className="card__like-text"></p>
              </div>
            </div>
          </div>
        </template>
      </section>
    </div>
  );
}

export default App;
