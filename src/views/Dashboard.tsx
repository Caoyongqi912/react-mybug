import React, { Component } from "react";

const SiderComponent = React.lazy(() => import("../components/SiderComponent"))

export default class Dashboard extends Component {
  render() {
    return (<SiderComponent />
    )
  }
}
