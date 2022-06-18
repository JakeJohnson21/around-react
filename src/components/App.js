import "../index.css";
import React, { useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import ImagePopup from "./ImagePopup";
import api from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  //________________________________________________________________________//

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [isDeleteCardPopupOpen, setIsDeleteCardPopupOpen] = useState(false);

  function handleUpdateUser(profile) {
    api
      .updateProfile(profile)
      .then(setCurrentUser)
      .catch((err) => console.error(`Error: ${err.status}`));
  }

  function handleUpdateAvatar(avatar) {
    api
      .updateProfilePicture(avatar)
      .then(setCurrentUser)
      .catch((err) => console.error(`Error: ${err.status}`));
  }

  useEffect(() => {
    api
      .getProfileInfo()
      .then((profile) => {
        setCurrentUser(profile);
      })
      .catch((err) => console.error(`Error: ${err.status}`));
  }, []);

  const [cards, setCards] = useState([]);

  function handleAddPlaceSubmit(newCard) {
    api
      .postNewCard(newCard)
      .then((generatedCard) => {
        setCards([generatedCard, ...cards]);
      })
      .catch((err) => console.error(`Error: ${err.status}`));
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some((user) => user._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) =>
        state.map((currentCard) =>
          currentCard._id === card._id ? newCard : currentCard
        )
      );
    });
  }

  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then((deleteCard) => {
        setCards((currentCards) =>
          currentCards.filter(
            (currentCard) => currentCard._id !== deleteCard._id
          )
        );
      })
      .catch((err) => console.error(`Error: ${err.status}`));
  }

  useEffect(() => {
    api
      .getInitialCards()
      .then((card) => {
        setCards(card);
      })
      .catch((err) => console.error(`Error: ${err.status}`));
  }, []);

  function handleCardClick(card) {
    setSelectedCard(card);
  }
  function handleDeleteCardClick() {
    setIsDeleteCardPopupOpen(true);
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
    setSelectedCard({});
    setIsDeleteCardPopupOpen(false);
  }

  //________________________________________________________________________//
  //

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <section className="page">
          <Header />
          <Main
            onEditAvatarClick={handleEditAvatarClick}
            onEditProfileClick={handleEditProfileClick}
            onAddPlaceClick={handleAddPlaceClick}
            onCardClick={handleCardClick}
            onCardDeleteClick={handleDeleteCardClick}
            cards={cards}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
          <ImagePopup card={selectedCard} onClose={handleCloseAllPopups} />
          <EditProfilePopup
            submitBtnText="Save"
            isOpen={isEditProfilePopupOpen}
            onClose={handleCloseAllPopups}
            onUpdateUser={handleUpdateUser}
          />
          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={handleCloseAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />

          <PopupWithForm
            name="delete"
            title="Are you sure?"
            submitBtnText="Yes"
            isOpen={isDeleteCardPopupOpen}
            onClose={handleCloseAllPopups}
          />

          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={handleCloseAllPopups}
            onAddPlaceSubmit={handleAddPlaceSubmit}
          />
          <Footer />
        </section>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
