import React from "react";
import { IRouteProps } from "./type";

const routesMap: IRouteProps[] = [
  {
    path: ["/login", "/"],
    exact: true,
    component: React.lazy(() => import("../views/Login")),
    meta: {
      auth: false,
      title: "login",
      // 如果当前登录状态跳转到后台首页
      isLogintoHome: true,
    },
  },
  {
    path: "/home",
    exact: true,
    component: React.lazy(() => import("../views/DashBoard")),
    meta: {
      auth: true,
    },
    childrenRoute: [
      {
        path: "/home/index",
        exact: true,
        component: React.lazy(() => import("../views/Home")),
        meta: {
          title: "MyBug",
          auth: true,
        },
      },
    ],
  },
  {
    path: "*",
    component: React.lazy(()=>import ("../views/Exe")),
    meta: {
      auth: false,
      title: "404",
    },
  },
];


export default routesMap;
