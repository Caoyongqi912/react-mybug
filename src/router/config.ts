import React from "react";

export interface IRoutBase {
  path: string; //路径
  component?: any; //组件
  redirect?: string; //302跳转
  meta?: IRouteMeta;
  auth?: boolean;
}

export interface IRouteMeta {
  title: string;
  icon?: string;
}

export interface IRoute extends IRoutBase {
  children?: IRoutBase[];
}

const routes: IRoute[] = [
  {
    path: "/",
    component: React.lazy(() => import("../views/Dashboard")),
    auth: true,
    meta: {
      title: "首页",
    },
  },
  {
    path: "/login",
    component: React.lazy(() => import("../views/Login")),
    auth: false,
    meta: {
      title: "登录",
    },
  },
];

export default routes;
