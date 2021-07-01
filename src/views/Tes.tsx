import { Component } from "react";

interface IState {
  counter: number;
}

export default class Tes extends Component<any, IState> {
  constructor(props: any, context: any) {
    super(props, context);
    this.state = {
      counter: 0,
    };
  }

  componentDidMount() {
    this.setState((state, props) => ({
      counter: state.counter + 1,
    }));
  }

  render() {
    return <>{this.state.counter}</>;
  }
}
