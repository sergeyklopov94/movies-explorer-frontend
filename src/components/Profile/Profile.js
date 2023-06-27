import React from 'react';
import DecorLine from '../DecorLine/DecorLine';
import Form from '../Form/Form';
import Header from '../Header/Header';
import './Profile.css';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';

function Profile({ onBurgerButtonClick, isBurgerMenuOpen, handleLogout, handleUpdateUser, errorMessage }) {

  const [isEdit, setEditState] = React.useState(false);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');

  const currentUser = React.useContext(CurrentUserContext);

  function handleEditClick() {
    setEditState(!isEdit);
  }

  function handleNameChange(evt) {
    setName(evt.target.value);
  }

  function handleEmailChange(evt) {
    setEmail(evt.target.value);
  }

  React.useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  function handleEditProfileSubmit(evt) {
    evt.preventDefault();
    handleUpdateUser({
      name,
      email,
    })
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
        <div className="profile-container">
          <h2 className="profile-container__title">Привет, Сергей!</h2>
          <Form
            isEdit = {isEdit}
            buttonText="Сохранить"
            handleSubmit={handleEditProfileSubmit}
            errorMessage={errorMessage}
            handleClick={handleEditClick}>
            <div className="form__input-container">
              <label className="form__input-label form__input-label_type_profile">
                Имя
              </label>
              <input className="form__input form__input_type_profile"
                type="text"
                id="name-input"
                name="name"
                value={name || ''}
                placeholder="Введите имя..."
                readOnly={isEdit ? false : true}
                onChange={handleNameChange}
                required>
              </input>
            </div>
            <DecorLine color="light"/>
            <div className="form__input-container">
              <label className="form__input-label form__input-label_type_profile">
                E-mail
              </label>
              <input className="form__input form__input_type_profile"
                type="email"
                id="email-input"
                name="email"
                value={email || ''}
                placeholder="Введите e-mail..."
                readOnly={isEdit ? false : true}
                onChange={handleEmailChange}
                required>
              </input>
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
      </main>
    </>
  );
}

export default Profile;
