import "../index.css";

function Main(props) {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__text">
          <div className="profile__image" onClick={props.onEditAvatarClick}>
            <img
              className="profile__pic"
              id="imageImg"
              alt="asdfsadfasdfas ds"
            />
            <button
              className="profile__pic-button"
              type="button"
              aria-label="edit profile"
            ></button>
          </div>
          <div className="profile__main">
            <div className="profile__title">
              <h1 className="profile__title-name">Jacques Cousteau</h1>
              <button
                onClick={props.onEditProfileClick}
                className="profile__edit-button"
                type="button"
                aria-label="edit profile"
              ></button>
            </div>
            <p className="profile__text-job">Explorer</p>
          </div>
        </div>

        <button
          onClick={props.onAddPlaceClick}
          className="profile__add"
          type="button"
          aria-label="add"
        ></button>
      </section>

      <section className="cards" onClick={props.onCardClick}></section>
    </main>
  );
}
export default Main;
