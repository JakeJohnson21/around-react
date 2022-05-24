import "../index.css";

function Main(props) {
  function handleEditAvatarClick() {
    const AvatarBtn = document.querySelector(".js-pic-modal");
    AvatarBtn.classList.add("modal__is-opened");
  }
  function handleEditProfileClick() {
    const ProfileBtn = document.querySelector(".js-edit-modal");
    ProfileBtn.classList.add("modal__is-opened");
  }
  function handleAddPlaceClick() {
    const cardBtn = document.querySelector(".js-add-modal");
    cardBtn.classList.add("modal__is-opened");
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__text">
          <div className="profile__image" onClick={handleEditAvatarClick}>
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
                onClick={handleEditProfileClick}
                className="profile__edit-button"
                type="button"
                aria-label="edit profile"
              ></button>
            </div>
            <p className="profile__text-job">Explorer</p>
          </div>
        </div>

        <button
          onClick={handleAddPlaceClick}
          className="profile__add"
          type="button"
          aria-label="add"
        ></button>
      </section>

      <section className="cards"></section>
    </main>
  );
}
export default Main;
