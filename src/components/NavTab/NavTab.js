import './NavTab.css';

function NavTab() {
  return (
    <section className="navTab">
      <nav className="navTab__container">
        <li button className="navTab__button">О проекте</li>
        <li className="navTab__button">Технологии</li>
        <li className="navTab__button">Студент</li>
      </nav>
    </section>
  );
}

export default NavTab;
