import "../index.css";
import React from "react";
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
  // MY ATTEMPT AT SETTING THE STATE VARIABLES FOR THE POPUP VISIBILITY
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({});
  const [isDeleteCardPopupOpen, setIsDeleteCardPopupOpen] =
    React.useState(false);

  function handleUpdateUser(profile) {
    api
      .updateProfile(profile)
      .then((newProfile) => {
        setCurrentUser(newProfile);
      })
      .catch((err) => console.error(`Error: ${err.status}`));
  }

  function handleUpdateAvatar(avatar) {
    api
      .updateProfilePicture(avatar)
      .then((newUser) => {
        setCurrentUser(newUser);
      })
      .catch((err) => console.error(`Error: ${err.status}`));
  }

  React.useEffect(() => {
    api
      .getProfileInfo()
      .then((profile) => {
        setCurrentUser(profile);
      })
      .catch((err) => console.error(`Error: ${err.status}`));
  }, []);

  const [cards, setCard] = React.useState([]);

  function handleAddPlaceSubmit(newCard) {
    api
      .postNewCard(newCard)
      .then((generatedCard) => {
        setCard([generatedCard, ...cards]);
      })
      .catch((err) => console.error(`Error: ${err.status}`));
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some((user) => user._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCard((state) =>
        state.map((currentCard) =>
          currentCard._id === card._id ? newCard : currentCard
        )
      );
    });
  }

  function handleCardDelete(card) {
    const isOwn = card.owner._id === currentUser._id;
    api
      .deleteCard(card._id)
      .then((deleteCard) => {
        setCard((state) =>
          state.filter((currentCard) =>
            currentCard._id === isOwn ? deleteCard : currentCard
          )
        );
      })
      .catch((err) => console.error(`Error: ${err.status}`));
  }

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((card) => {
        setCard(card);
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
          ></PopupWithForm>

          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={handleCloseAllPopups}
            onAddPlaceSubmit={handleAddPlaceSubmit}
          ></AddPlacePopup>
          <Footer />
        </section>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
