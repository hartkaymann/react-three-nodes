import React from "react";

function Input(props) {
  return (
    <div className="input-wrapper">
      <label>{props.label}</label>
      <input type={props.type} defaultValue={props.default}></input>
    </div>
  );

}

function NumberInput(props) {
  return (
    <Input
      label={props.label}
      type="number"
      default={2}
    />
  );
}

function TextInput(props) {
  return (
    <Input
      label={props.label}
      type="text"
      default=""
    />
  );
}

export { Input, NumberInput, TextInput};
