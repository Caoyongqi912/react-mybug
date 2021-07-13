import React from "react";
import { IRouteProps } from "./type";

const routesMap: IRouteProps[] = [
  {
    path: "/login",
    exact: true,
    component: React.lazy(() => import("../views/Login")),
    meta: {
      auth: true,
      title: "login",
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
        component: "",
        meta: {
          title: "index",
          auth: true, 
        },
      },
    ],
  },
];


export default routesMap;
