import { Component,Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Spin } from "antd";
import config from "./config";
// import "./styles/index.less";
import { layoutRouteList } from "./router/utils";
import { IRoute } from "./router/config";

class App extends Component<any, any> {
  render() {
    return (
      <Suspense fallback={<Spin size="large" className="layout__loading" />}>
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
export default App;
