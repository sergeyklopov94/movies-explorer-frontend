import './DecorLine.css';

function DecorLine({ color }) {
  return <div class={`decor-line decor-line_${color}`}></div>;
}

export default DecorLine;
