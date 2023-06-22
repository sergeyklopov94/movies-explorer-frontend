import './ProfileButton.css';
import profileIcon from '../../images/icon-profile-button.svg';
import { Link } from 'react-router-dom';

function ProfileButton() {
  return (
    <Link to="/profile" className="profile-button">Аккаунт
      <div className="profile-button__icon-container">
        <img className="profile-button__icon" src={profileIcon} alt="Иконка профиля"/>
      </div>
    </Link>
  );
}

export default ProfileButton;
