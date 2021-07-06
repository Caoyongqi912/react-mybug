import { Component, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Spin } from "antd";
import config from "./config";
import { layoutRouteList } from "./router/utils";
import { IRoute } from "./router/config";
import "./App.css";
import { connect } from "react-redux";
import { UserState } from "../src/store/module/user";

class App extends Component<any, any> {
  render() {
    let token = this.props.token;
    console.log("token ", token);
    return (
      <Suspense fallback={<Spin size="large" />}>
        <Router basename={config.BASE_NAME}>
          <Switch>
            {layoutRouteList.map((route: IRoute) => (
              <Route
                key={config.BASE_NAME + route.path}
                path={route.path}
                component={route.component}
                exact
              ></Route>
            ))}
          </Switch>
        </Router>
      </Suspense>
    );
  }
}
const mapStateToProps = (state: UserState, myProps: any) => {
  console.log("token", state.token);
  console.log("myProps", myProps);
  return { token: state.token };
};

export default connect(mapStateToProps)(App);
