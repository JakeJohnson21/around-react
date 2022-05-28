import "../index.css";
import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import Card from "./Card";

function App() {
  //________________________________________________________________________//
  // MY ATTEMPT AT SETTING THE STATE VARIABLES FOR THE POPUP VISIBILITY
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState();

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleCloseAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(false);
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
        <Card />
        <ImagePopup card={selectedCard} />
        <PopupWithForm
          name="pic"
          title="Edit profile pic"
          submit="Save"
          isOpen={isEditAvatarPopupOpen}
          onClose={handleCloseAllPopups}
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
          onClose={handleCloseAllPopups}
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
          onClose={handleCloseAllPopups}
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
        <Footer />
      </section>
    </div>
  );
}

export default App;
