import './Promo.css';
import landingLogo from '../../images/landing-logo.svg';

function Promo() {
  return (
    <section className="promo">
      <h1 className="promo__text">Учебный проект студента факультета Веб-разработки.
        <img className="promo__image" src={ landingLogo } alt="Изображение буквы П на фоне сетки"/>
      </h1>
    </section>
  );
}

export default Promo;
