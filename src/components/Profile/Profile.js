import React from 'react';
import Form from '../Form/Form';
import Header from '../Header/Header';
import './Profile.css';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import useFormWithValidation from "../../hooks/useValidation";
import Preloader from '../Preloader/Preloader';

function Profile({
  onBurgerButtonClick,
  isBurgerMenuOpen,
  handleLogout,
  handleUpdateUser,
  errorMessage,
  setFormErrorMessage,
  formSuccessMessage,
  setFormSuccessMessage,
  isLoading }) {

  const { values, errors, isValid, handleChange, resetForm } = useFormWithValidation();

  const [isEdit, setEditState] = React.useState(false);

  const currentUser = React.useContext(CurrentUserContext);

  function handleEditClick() {
    setEditState(!isEdit);
    setFormErrorMessage("");
    setFormSuccessMessage("");
  }

  React.useEffect(() => {
    setFormErrorMessage("");
  }, [setFormErrorMessage]);

  React.useEffect(() => {
    setFormSuccessMessage("");
  }, [setFormSuccessMessage]);

  React.useEffect(() => {
    resetForm(
      { name: currentUser.name, email: currentUser.email }, {}, {}, false);
  }, [resetForm, currentUser]);

  function handleEditProfileSubmit(evt) {
    evt.preventDefault();
    handleUpdateUser(values);
  }

  const buttonsListClassName = (isEdit) ?
  ( "profile-container__buttons-list profile-container__buttons-list_invisible" ) :
  ( "profile-container__buttons-list");

  return (
    <>
      <BurgerMenu
        isBurgerMenuOpen={isBurgerMenuOpen}
      />
      <Header
        color="light"
        onBurgerButtonClick={onBurgerButtonClick}
        isBurgerMenuOpen={isBurgerMenuOpen}
      />
      <main className="profile">
        {
        (isLoading === true) && (<Preloader />)
        }
        {
        (isLoading === false) && (
        <div className="profile-container">
          <h2 className="profile-container__title">Привет, {currentUser.name}!</h2>
          <Form
            isEdit = {isEdit}
            buttonText="Сохранить"
            handleSubmit={handleEditProfileSubmit}
            errorMessage={errorMessage}
            setFormErrorMessage={setFormErrorMessage}
            formSuccessMessage={formSuccessMessage}
            setFormSuccessMessage={setFormSuccessMessage}
            isValid={isValid}
            handleClick={handleEditClick}>
            <div className="form__input-container">
              <label className="form__input-label form__input-label_type_profile">
                Имя
                <input className={`form__input form__input_type_profile ${errors.name ? "form__input_type_error" : ""}`}
                  type="text"
                  id="name-input"
                  name="name"
                  value={values.name || ""}
                  placeholder="Введите имя..."
                  readOnly={isEdit ? false : true}
                  onChange={handleChange}
                  required>
                </input>
              </label>
              <span className="form__info-error">{errors.name || ""}</span>
            </div>
            <div className="form__input-container">
              <label className="form__input-label form__input-label_type_profile">
                E-mail
                <input className={`form__input form__input_type_profile ${errors.email ? "form__input_type_error" : ""}`}
                  type="email"
                  id="email-input"
                  name="email"
                  value={values.email || ""}
                  placeholder="Введите e-mail..."
                  readOnly={isEdit ? false : true}
                  onChange={handleChange}
                  required>
                </input>
              </label>
              <span className="form__info-error">{errors.email || ""}</span>
            </div>
          </Form>
          <div className={buttonsListClassName}>
            <button
              className="profile-container__button profile-container__button_type_edit"
              type="button"
              onClick={handleEditClick}>
              Редактировать
            </button>
            <button
              className="profile-container__button profile-container__button_type_signout"
              type="button"
              onClick={handleLogout}>
              Выйти из аккаунта
            </button>
          </div>
        </div>
        )}
      </main>
    </>
  );
}

export default Profile;
