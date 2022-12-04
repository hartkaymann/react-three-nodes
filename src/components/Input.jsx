import React from "react";

function Input(props) {

  let input = null;
  if (props.type !== undefined) {
    input = <input name={props.label} type={props.type} value={props.value} onChange={(e) => props.onChange(e)} />;
  }

  return (
    <div
      className='input-wrapper'
    >
      <label>
        {props.label}
      </label>
      {input}
    </div>
  );
}

function NumberInput(props) {
  return (
    <Input
      label={props.label}
      type='number'
      value={props.value}
      onChange={(e) => props.onChange(e)}
    />
  );
}

function TextInput(props) {
  return (
    <Input
      label={props.label}
      type='text'
      value={props.value}
      default=''
    />
  );
}


function ColorInput(props) {
  return (
    <Input
      label={props.label ? props.label : 'Color'}
      type='color'
      value={props.value}
      default='#000000'
    />
  );
}

// TODO: for loops
function Vec2Input(props) {
  return (
    <div
      className='input-wrapper'
    >
      <label>
        {props.label}
      </label>
      <input type='number' value={props.value[0]} />
      <input type='number' value={props.value[1]} />
    </div>
  );
}

function Vec3Input(props) {
  return (
    <div
      className='input-wrapper'
    >
      <label>
        {props.label}
      </label>
      <input type='number' value={props.value[0]} />
      <input type='number' value={props.value[1]} />
      <input type='number' value={props.value[2]} />
    </div>
  );
}

export { Input, NumberInput, TextInput, Vec2Input, Vec3Input, ColorInput };
