import { FC } from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import { IRouteProps } from "src/router/type";
import { IStoreState } from "src/store/types";
import Config from "../../config";
import qs from "query-string";

type Porps = IRouteProps & ReturnType<typeof mapStateToProps>;

const PrivateRoute: FC<Porps> = ({
  component: Component,
  childrenRoute,
  isLogin,
  ...rest
}) => {
  const { meta } = rest;
  const location = useLocation();
  const querySearch = location.search;
  // 权限
  const auth = (function () {
    // 此路由是否需要权限
    if (meta?.auth) {
      // 是否已登录
      if (isLogin) {
        return true;
      }
      return false;
    }
    return true;
  })();

  // 标题
  if (meta) {
    if (meta.title) {
      document.title = `${meta.title} - ${Config.BASE_NAME}`;
    } else {
      document.title = Config.BASE_NAME;
    }
  }

  // 若登录。 跳转
  if (meta?.isLogintoHome && isLogin) {

    const redirectUrl = qs.parse(location.search).redirectUrl as string;
    const url = redirectUrl || "/home/index" + location.search;
    return <Redirect to={url} />;
  }
  return (
    <Route
      render={(props) => {
        return auth ? (
          <Component {...props} {...rest}>
            {Array.isArray(childrenRoute) ? (
              <Switch>
                {childrenRoute.map((route, idx: number) => (
                  <PrivateRouteComponent {...route} key={idx} />
                ))}
              </Switch>
            ) : null}
          </Component>
        ) : (
          <Redirect
            to={{
              pathname: "/",
              search: `?redirectUrl=${props.location.pathname}${querySearch}`,
            }}
          />
        );
      }}
    ></Route>
  );
};

const mapStateToProps = (state: IStoreState) => {
  return {
    isLogin: state.user.isLogin,
  };
};
export const PrivateRouteComponent = connect(mapStateToProps)(PrivateRoute);

export default PrivateRouteComponent;
