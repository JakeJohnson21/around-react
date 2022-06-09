import React from "react";
import "../index.css";
import api from "../utils/api.js";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const [cards, setCard] = React.useState([]);

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

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__text">
          <div className="profile__image" onClick={props.onEditAvatarClick}>
            <img
              className="profile__pic"
              id="imageImg"
              alt=""
              src={currentUser.avatar}
            />
            <button
              className="profile__pic-button"
              type="button"
              aria-label="edit profile"
            ></button>
          </div>
          <div className="profile__main">
            <div className="profile__title">
              <h1 className="profile__title-name">{currentUser.name}</h1>
              <button
                onClick={props.onEditProfileClick}
                className="profile__edit-button"
                type="button"
                aria-label="edit profile"
              ></button>
            </div>
            <p className="profile__text-job">{currentUser.about}</p>
          </div>
        </div>

        <button
          onClick={props.onAddPlaceClick}
          className="profile__add"
          type="button"
          aria-label="add"
        ></button>
      </section>

      <section className="cards">
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            onCardClick={props.onCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
        ))}
      </section>
    </main>
  );
}
export default Main;
