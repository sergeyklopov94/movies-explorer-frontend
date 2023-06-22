import React from 'react';
import DecorLine from '../DecorLine/DecorLine';
import Form from '../Form/Form';
import Header from '../Header/Header';
import './Profile.css';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

function Profile({ onBurgerButtonClick, isBurgerMenuOpen }) {

  // временное решение для проверки редактирования состояния профиля
  const [isEdit, setEditState] = React.useState(false);

  function handleEditClick() {
    setEditState(true);
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
            buttonText="Сохранить">
            <div className="form__input-container">
              <label className="form__input-label form__input-label_type_profile">
                Имя
              </label>
              <input className="form__input form__input_type_profile"
                type="text"
                id="name-input"
                name="name"
                placeholder="Введите имя..."
                defaultValue="Сергей"
                readOnly={isEdit ? false : true}
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
                placeholder="Введите e-mail..."
                defaultValue="sklo@yandex.ru"
                readOnly={isEdit ? false : true}
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
              type="button">
              Выйти из аккаунта
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default Profile;
