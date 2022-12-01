import { useState } from "react";

function Toolbar(props) {
  const [selected, setSelected] = useState("A");

  return (
    <div
      className="toolbar"
    >
      <ul>
        <Tool value="A" onClick={(e) => handleClick(e)} selected={selected} />
        <Tool value="B" onClick={(e) => handleClick(e)} selected={selected} />
        <Tool value="C" onClick={(e) => handleClick(e)} selected={selected} />
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
    <li>
      <button
        value={props.value}
        className={props.selected === props.value ? 'selected' : null}
        onClick={props.onClick}
      >
        {props.value}
      </button>
    </li>
  );
}

export { Toolbar };