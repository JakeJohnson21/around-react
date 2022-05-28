import React from "react";
import "../index.css";
import api from "../utils/api.js";
import Card from "./Card";

function Main(props) {
  const [username, setUsername] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  React.useEffect(() => {
    api.getProfileInfo().then((userData) => {
      setUsername(userData.name);
      setUserDescription(userData.about);
      setUserAvatar(userData.avatar);
    });
  }, []);
  const [cards, setCard] = React.useState([]);
  React.useEffect(() => {
    api.getInitialCards().then((card) => {
      setCard(card);
    });
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
              src={userAvatar}
            />
            <button
              className="profile__pic-button"
              type="button"
              aria-label="edit profile"
            ></button>
          </div>
          <div className="profile__main">
            <div className="profile__title">
              <h1 className="profile__title-name">{username}</h1>
              <button
                onClick={props.onEditProfileClick}
                className="profile__edit-button"
                type="button"
                aria-label="edit profile"
              ></button>
            </div>
            <p className="profile__text-job">{userDescription}</p>
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
          <Card key={card._id} card={card} onCardClick={props.onCardClick} />
        ))}
      </section>
    </main>
  );
}
export default Main;
