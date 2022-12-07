import React from "react";

function Input(props) {

  let input = null;
  if (props.inputs !== undefined) {
    input = props.inputs.map((input, i) => {
      return (
        <React.Fragment key={input.name}>
          <input
            name={input.name}
            type={input.type}
            value={input.value}
            onChange={(e) => { props.onChange(e) }}
          />
        </React.Fragment>
      );
    })
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
      inputs={[
        {
          name: props.label,
          type: 'number',
          value: props.value ? props.value : 0,
        },
      ]}
      onChange={(e) => props.onChange(e)}
    />
  );
}

function TextInput(props) {
  return (
    <Input
      label={props.label}
      inputs={[
        {
          name: props.label,
          type: 'text',
          value: props.value ? props.value : '',
        },
      ]}
      onChange={(e) => props.onChange(e)}
    />
  );
}


function ColorInput(props) {
  return (
    <Input
      label={props.label}
      inputs={[
        {
          name: props.label,
          type: 'color',
          value: props.value ? props.value : '#000000',
        },
      ]}
      onChange={(e) => props.onChange(e)}
    />
  );
}

// TODO: for loops
function Vec2Input(props) {
  return (
    <Input
      label={props.label}
      inputs={[
        {
          name: 'x',
          type: 'number',
          value: props.value.x ? props.value.x : 0,
        },
        {
          name: 'y',
          type: 'number',
          value: props.value.y ? props.value.y : 0,
        }
      ]}
      onChange={(e) => props.onChange(e)}
    />
  );
}

function Vec3Input(props) {
  return (
    <Input
      label={props.label}
      inputs={[
        {
          name: 'x',
          type: 'number',
          value: props.value.x ? props.value.x : 0,
        },
        {
          name: 'y',
          type: 'number',
          value: props.value.y ? props.value.y : 0,
        },
        {
          name: 'z',
          type: 'number',
          value: props.value.z ? props.value.z : 0,
        }
      ]}
      onChange={(i, t) => props.onChange(i, t)}
    />
  );
}

export { Input, NumberInput, TextInput, Vec2Input, Vec3Input, ColorInput };
