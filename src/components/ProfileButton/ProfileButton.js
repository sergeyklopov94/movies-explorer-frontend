import './ProfileButton.css';
import profileIcon from '../../images/icon-profile-button.svg';

function ProfileButton() {
  return (
    <button className="profile-button">Аккаунт
      <div className="profile-button__icon-container">
        <img className="profile-button__icon" src={profileIcon} alt="Иконка профиля"/>
      </div>
    </button>
  );
}

export default ProfileButton;
