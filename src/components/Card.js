import "../index.css";
import React from "react";
import api from "../utils/api";
import trashSrc from "../images/Trash.svg";

function Card(props) {
  const [cards, setCard] = React.useState([]);
  React.useEffect(() => {
    api.getInitialCards().then((card) => {
      setCard(card);
    });
  }, []);
  function handleClick() {
    props.onCardClick(props.card);
  }
  return (
    <section className="cards" onClick={props.onCardClick}>
      {cards.map((card) => {
        return (
          <div className="card__item" key={card._id}>
            <img className="card__image" src={card.link} alt="" />
            <img
              id="trash-svg"
              alt="trash icon"
              className="card__trash"
              src={trashSrc}
            />
            <div className="card__text">
              <h2 className="card__place">{card.name}</h2>
              <div className="card__like">
                <button
                  className="card__like-button"
                  type="button"
                  aria-label="like"
                ></button>
                <p className="card__like-text">{card.likes.length}</p>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
export default Card;
