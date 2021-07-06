import React, { Component } from "react";

const MyLayout = React.lazy(() => import("../components/Layout"));

export default class Dashboard extends Component {
  render() {
    return <MyLayout />;
  }
}
