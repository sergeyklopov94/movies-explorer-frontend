import './NavTab.css';

function NavTab() {
  return (
    <section className="nav-tab">
      <nav className="nav-tab__container">
        <li button className="nav-tab__link">О проекте</li>
        <li className="nav-tab__link">Технологии</li>
        <li className="nav-tab__link">Студент</li>
      </nav>
    </section>
  );
}

export default NavTab;
