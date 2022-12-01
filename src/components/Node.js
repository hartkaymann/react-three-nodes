import React from "react";
import { NumberInput } from "./Input"

export class Node extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      dragging: false,
      selected: false,
      output: null,
      position: {
        x: props.position.x,
        y: props.position.y,
      }
    }
  }

  render() {
    return (
      <div
        className='node draggable'
        style={{
          left: this.state.position.x,
          top: this.state.position.y,
        }}
      >
        <p
          className="title"
          type="text"
        >
          {this.props.title}
        </p>
        <form
          className='node-inputs'
        >
          <NumberInput
            label="Height"
          />
        </form>
      </div>
    );
  }
}


