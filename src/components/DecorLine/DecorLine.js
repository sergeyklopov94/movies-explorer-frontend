import './DecorLine.css';

function DecorLine({ color }) {
  return <div className={`decor-line decor-line_${color}`}></div>;
}

export default DecorLine;
