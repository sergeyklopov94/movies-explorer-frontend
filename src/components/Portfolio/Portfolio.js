import DecorLine from '../DecorLine/DecorLine';
import PortfolioLink from '../PortfolioLink/PortfolioLink';
import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__link-list">
        <PortfolioLink text="Статичный сайт" link="https://github.com/sergeyklopov94/how-to-learn"/>
        <DecorLine color="light"/>
        <PortfolioLink text="Адаптивный сайт" link="https://github.com/sergeyklopov94/russian-travel"/>
        <DecorLine color="light"/>
        <PortfolioLink text="Одностраничное приложение" link="https://github.com/sergeyklopov94/mesto"/>
        <DecorLine color="light"/>
      </ul>
    </section>
  );
}

export default Portfolio;
