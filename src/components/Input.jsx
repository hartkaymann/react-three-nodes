import React, { useState } from "react";

function Input(props) {
  const [value, setValue] = useState(props.default);

  let input = null;
  if (props.type !== undefined) {
    input = <input type={props.type} value={value} onChange={(e) => handleChange(e)} />;
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

  function handleChange(e) {
    setValue(e.target.value);
  }
}

function NumberInput(props) {
  return (
    <Input
      label={props.label}
      type='number'
      default={2}
    />
  );
}

function TextInput(props) {
  return (
    <Input
      label={props.label}
      type='text'
      default=''
    />
  );
}


function ColorInput(props) {
  return (
    <Input
      label={props.label ? props.label : 'Color'}
      type='color'
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
      <input type='number' defaultValue={0.0} />
      <input type='number' defaultValue={0.0} />
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
      <input type='number' defaultValue={0.0} />
      <input type='number' defaultValue={0.0} />
      <input type='number' defaultValue={0.0} />
    </div>
  );
}

export { Input, NumberInput, TextInput, Vec2Input, Vec3Input, ColorInput };
