import DecorLine from '../DecorLine/DecorLine';
import SectionTitle from '../SectionTitle/SectionTitle';
import './Techs.css';

function Techs() {
  return (
    <section className="techs">
      <SectionTitle text="Технологии"></SectionTitle>
      <DecorLine color="dark"/>
      <h3 className="techs_subtitle">7 технологий</h3>
      <p className="techs_text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <ul className="techs__list">
        <li className="techs__item">HTML</li>
        <li className="techs__item">CSS</li>
        <li className="techs__item">JS</li>
        <li className="techs__item">React</li>
        <li className="techs__item">Git</li>
        <li className="techs__item">Express.js</li>
        <li className="techs__item">mongoDB</li>
      </ul>
    </section>
  );
}

export default Techs;