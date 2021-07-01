import { Component } from "react";

interface IPropes {
  name: string;
  age?: number;
  auth?: boolean;
}

export default class Desc extends Component<IPropes, any> {
  render() {
    return (
      <>
        <h2>{this.props.name}</h2>
        <span>{this.props.age}</span>
      </>
    );
  }
}
