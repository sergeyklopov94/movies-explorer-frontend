import DecorLine from '../DecorLine/DecorLine';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <h3 className="footer__title footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
      <DecorLine color="light"/>
      <div className="footer__container">
        <p className="footer__year footer__text">&copy; 2023</p>
        <nav className="footer__links">
          <a className="footer__link footer__text" href="https://practicum.yandex.ru/" target="_blank" rel="noreferrer">
            Яндекс.Практикум
          </a>
          <a className="footer__link footer__text" href="https://github.com/sergeyklopov94" target="_blank" rel="noreferrer">
            Github
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
