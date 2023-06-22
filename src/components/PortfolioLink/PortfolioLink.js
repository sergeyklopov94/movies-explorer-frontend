import DecorLine from '../DecorLine/DecorLine';
import './PortfolioLink.css';

function PortfolioLink({ text, link }) {
  return (
    <li className="portfolio__link-container">
      <a
        href={ link }
        className="portfolio__link"
        target="_blank"
        rel="noreferrer"
      >{ text }
        <span className="portfolio__logo">&#8599;</span>
      </a>
      <DecorLine color="light"/>
    </li>
  );
}

export default PortfolioLink;
