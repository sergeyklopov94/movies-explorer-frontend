import React from 'react';
import DecorLine from '../DecorLine/DecorLine';
import Form from '../Form/Form';
import Header from '../Header/Header';
import './Profile.css';

function Profile() {

  // временное решение для проверки редактирования состояния профиля
  const [isEdit, setEditState] = React.useState(false);

  function handleEditClick() {
    setEditState(true);
  }

  const buttonsListClassName = (isEdit) ?
  ( "profile__buttons-list profile__buttons-list_invisible" ) :
  ( "profile__buttons-list");

  return (
    <main className="profile">
      <Header color="light"/>
      <div className="profile__container">
        <h2 className="profile__title">Привет, Сергей!</h2>
        <Form
          isEdit = {isEdit}
          buttonText="Сохранить">
          <div className="form__input-container">
            <label for="email" className="form__input-label_type_profile">
              E-mail
            </label>
            <input className="form__input_type_profile"
              type="email"
              id="email-input"
              name="email"
              placeholder="Введите e-mail..."
              defaultValue="sklo@yandex.ru"
              readOnly={isEdit ? false : true}
              required>
            </input>
          </div>
          <DecorLine color="light"/>
          <div className="form__input-container">
            <label for="name" className="form__input-label_type_profile">
              Имя
            </label>
            <input className="form__input_type_profile"
              type="name"
              id="name-input"
              name="name"
              placeholder="Введите имя..."
              defaultValue="Сергей"
              readOnly={isEdit ? false : true}
              required>
            </input>
          </div>
        </Form>
        <div className={buttonsListClassName}>
          <button
            className="profile__button profile__button_type_edit"
            type="button"
            onClick={handleEditClick}>
            Редактировать
          </button>
          <button
            className="profile__button profile__button_type_signout"
            type="button">
            Выйти из аккаунта
          </button>
        </div>
      </div>
    </main>
  );
}

export default Profile;
