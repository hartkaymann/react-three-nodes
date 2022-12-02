import { useState } from "react";

function Toolbar(props) {
  const [selected, setSelected] = useState("A");

  return (
    <div
      className="toolbar"
    >
      <ul>
        <Tool name="O" value="output" onClick={(e) => handleClick(e)} selected={selected} />
        <Tool name="N" value="number" onClick={(e) => handleClick(e)} selected={selected} />
        <Tool name="G" value="geometry" onClick={(e) => handleClick(e)} selected={selected} />
        <Tool name="P" value="plane" onClick={(e) => handleClick(e)} selected={selected} />

      </ul>
    </div>
  );

  function handleClick(e) {
    setSelected(e.target.value);
    props.onClick(e.target.value)
  }
}

function Tool(props) {
  return (
    <li key={props.value.toString()}>
      <button
        value={props.value}
        className={props.selected === props.value ? 'selected' : null}
        onClick={props.onClick}
      >
        {props.name}
      </button>
    </li>
  );
}

export { Toolbar };