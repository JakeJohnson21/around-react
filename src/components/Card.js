import "../index.css";
import React from "react";
import trashSrc from "../images/Trash.svg";

function Card({ card, onCardClick }) {
  return (
    <section className="cards" onClick={onCardClick}>
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
    </section>
  );
}
export default Card;
