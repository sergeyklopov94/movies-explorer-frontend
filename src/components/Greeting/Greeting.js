import './Greeting.css';
import Logo from '../Logo/Logo';

function Greeting({ text }) {
  return (
    <div className="greeting">
      <Logo/>
      <h2 className="greeting__title">{ text }</h2>
    </div>
  );
}

export default Greeting;
