import './AboutMe.css';
import DecorLine from '../DecorLine/DecorLine';
import SectionTitle from '../SectionTitle/SectionTitle';
import myPhoto from '../../images/student.jpg';

function AboutMe() {
  return (
    <section className="about-me" id={"student"}>
      <SectionTitle text="Студент"></SectionTitle>
      <DecorLine color="dark"/>
      <article className="about-me__intro">
        <h3 className="about-me__name">Сергей</h3>
        <p className="about-me__description">Фронтенд-разработчик, 28 лет</p>
        <p className="about-me__info">
          Я родился и живу в Калуге, закончил Всероссийский Государственный Университет Юстиций по специальности правоохранительная деятельность.
          Несколько лет посвятил работе в полиции. В последние пару лет решил, что пора менять сферу своей деятельности.
          Давно проявлял интерес к сфере IT.
          Здесь нравится возможность творческого подхода в работе, ее разнообразие и постоянное развитие как самой отрасли,
          так и совершенствование своих навыков.
          Люблю путешествовать. Помимо этого, неравнодушен к футболу и кинематографу.
        </p>
        <a className="about-me__link" href="https://github.com/sergeyklopov94" target="_blank" rel="noreferrer">Github</a>
        <img className="about-me__photo" src={ myPhoto } alt="Фотография студента"/>
      </article>
    </section>
  );
}

export default AboutMe;
