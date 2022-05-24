import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";

function App() {
  return (
    <div className="App">
      <section className="page">
        <Header />
        <Main />
        <Footer />
        <PopupWithForm name="pic" title="Edit profile pic" submit="Save">
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
        <PopupWithForm name="edit" title="Edit profile" submit="Save">
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
        <PopupWithForm name="add" title="New Place" submit="Create">
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
        <div className="modal js-pic-modal">
          <div className="modal__container">
            <form className="modal__box" name="edit-pic" noValidate>
              <h2 className="modal__profile">Change profile picture</h2>
              <label name="">
                <input
                  id="pic-input"
                  name="link"
                  type="url"
                  className="modal__input modal__input_edit_pic"
                  placeholder="link"
                  required
                />
              </label>
              <button type="submit" className="modal__button" aria-label="save">
                Save
              </button>
            </form>
            <button
              className="modal__close-button"
              type="button"
              aria-label="close"
            ></button>
          </div>
        </div>
        <div className="modal js-delete-modal">
          <div className="modal__container">
            <form className="modal__box" name="delete-card" noValidate>
              <h2 className="modal__profile">Are you sure?</h2>
              <button type="submit" className="modal__button" aria-label="yes">
                Yes
              </button>
            </form>
            <button
              className="modal__close-button"
              type="button"
              aria-label="close"
            ></button>
          </div>
        </div>

        <div className="modal js-edit-modal">
          <div className="modal__container">
            <form className="modal__box" name="edit-profile" noValidate>
              <h2 className="modal__profile">Edit profile</h2>
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
                <span
                  id="name-input-error"
                  className="modal__input-error"
                ></span>
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

                <span
                  id="title-input-error"
                  className="modal__input-error"
                ></span>
              </label>
              <button type="submit" className="modal__button" aria-label="save">
                Save
              </button>
            </form>
            <button
              className="modal__close-button"
              type="button"
              aria-label="close"
            ></button>
          </div>
        </div>

        <div className="modal js-add-modal">
          <div className="modal__container">
            <form className="modal__box" name="edit-place" noValidate>
              <h2 className="modal__profile">New Place</h2>
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
              <span
                id="place-input-error"
                className="modal__input-error"
              ></span>
              <input
                id="url-input"
                name="link"
                type="url"
                className="modal__input modal__input_image_link"
                placeholder="Image link"
                required
              />
              <span id="url-input-error" className="modal__input-error"></span>
              <button
                type="submit"
                className="modal__button"
                aria-label="create"
              >
                Create
              </button>
            </form>
            <button
              className="modal__close-button"
              type="button"
              aria-label="close"
            ></button>
          </div>
        </div>
        <div className="modal js-preview-modal">
          <div className="modal__container modal__container_preview">
            <button
              className="modal__close-button"
              type="button"
              aria-label="close"
            ></button>
            <img className="modal__preview-image" src=" " alt="" />
            <p className="modal__preview-text"></p>
          </div>
        </div>

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
