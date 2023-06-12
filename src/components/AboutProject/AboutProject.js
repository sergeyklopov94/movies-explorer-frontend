import DecorLine from '../DecorLine/DecorLine';
import SectionTitle from '../SectionTitle/SectionTitle';
import './AboutProject.css';

function AboutProject() {
  return (
    <section className="aboutProject" id={"project"}>
      <SectionTitle text="О проекте"></SectionTitle>
      <DecorLine color="dark"/>
      <ul className="about-project__table">
        <li className="about-project__column">
          <h3 className="about-project__column-header">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__column-text">
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
          </p>
        </li>
        <li className="about-project__column">
          <h3 className="about-project__column-header">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__column-text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <ul className="aboutProject__time">
        <p className="aboutProject__time-text aboutProject__time-text_min">1 неделя</p>
        <p className="aboutProject__time-text aboutProject__time-text_max">4 недели</p>
        <p className="aboutProject__time-text aboutProject__time-text_bold aboutProject__time-text_light">Back-end</p>
        <p className="aboutProject__time-text aboutProject__time-text_bold aboutProject__time-text_light">Front-end</p>
      </ul>
    </section>
  );
}

export default AboutProject;
