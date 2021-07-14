import config from "../config";
import { connect, DispatchProp } from "react-redux";
import { FC,Suspense,useEffect } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import routesMap from "./routes";
import PrivateRoute from "../components/PrivateRoute";
import { validateLocalStatus } from "src/store/module/user";


const Routes: FC<DispatchProp> = ({ dispatch }) => {
    useEffect(() => {
    dispatch(validateLocalStatus());
  });

  return (
    <Router basename={config.BASE_NAME}>
      <Suspense fallback={null}>
        <Switch>
          {routesMap.map((route, idx) => (
            <PrivateRoute {...route} key={idx} />
          ))}
        </Switch>{" "}
      </Suspense>
    </Router>
  );
};

export default connect()(Routes);
