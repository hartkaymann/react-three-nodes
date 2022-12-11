import React, { useContext } from "react";
import Draggable from "react-draggable";
import { NodesDispatchContext } from "../../NodeEditor";
import { ColorInput, Input, NumberInput, Vec2Input, Vec3Input } from "../Input"

function Node(props) {
  const nodesDispatch = useContext(NodesDispatchContext);

  // Create inputs
  const inputs = props.inputs.map((input, i) => {
    const InputType = input.type;
    return (
      <React.Fragment key={'input-' + input.label.toLowerCase()}>
        <InputType
          label={input.label}
          value={input.value}
          onChange={(e) => handleChange(e)}
        />
      </React.Fragment>
    );
  })

  return (
    <Draggable defaultPosition={{ x: props.position.x, y: props.position.y }}>
      <div
        id={props.id}
        className='node'
      >
        <p className="title"> {props.title}</p>
        <ul className='node-inputs'> {inputs} </ul>
      </div >
    </Draggable>
  );

  function handleChange(e) {
    nodesDispatch({
      type: 'change',
      payload: {
        id: props.id,
        name: e.target.name,
        value: e.target.value,
      }
    })
  }
}

function OutputNode(props) {
  return (
    <Node
      {...props}
      title="Output"
      inputs={[{
        label: 'Outputs',
        type: Input,
        value: null,
      }]}
    />
  );
}

function NumberNode(props) {
  return (
    <Node
      {...props}
      title="Number"
      inputs={[{
        label: 'Number',
        type: NumberInput,
        value: props.inputs !== undefined ? props.inputs['Number'] : 0,
      }]}
    />
  );
}

function GeometryNode(props) {
  return (
    <Node
      {...props}
      title="Geometry"
      inputs={[{
        label: 'Position',
        type: Vec3Input,
        value: props.inputs !== undefined ? props.inputs : { x: 0, y: 0, z: 0 },
      }]}
    />
  );
}

function PlaneNode(props) {
  return (
    <Node
      {...props}
      title='Plane'
      inputs={[
        {
          label: 'Position',
          type: Vec3Input,
          value: props.inputs !== undefined ? props.inputs : { x: 0, y: 0, z: 0 },
        },
        {
          label: 'Dimensions',
          type: Vec2Input,
          value: props.inputs !== undefined ? props.inputs : { x: 0, y: 0 },
        },
        {
          label: 'Color',
          type: ColorInput,
          value: props.inputs !== undefined ? props.inputs['Color'] : '#000000',
        }
      ]}
    />
  );
}

export { Node, OutputNode, GeometryNode, PlaneNode, NumberNode }