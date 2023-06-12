import { HashLink as Link } from 'react-router-hash-link';
import './NavTab.css';

function NavTab() {
  return (
    <section className="nav-tab">
      <nav className="nav-tab__container">
        <Link to="/#project"  className="nav-tab__link">О проекте</Link>
        <Link to="/#techs" className="nav-tab__link" href="#techs">Технологии</Link>
        <Link to="/#student" className="nav-tab__link" href="#student">Студент</Link>
      </nav>
    </section>
  );
}

export default NavTab;
