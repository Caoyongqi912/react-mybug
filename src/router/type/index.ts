interface IMetaProps {
  title?: string;
  //是否需要登录状态
  auth?: boolean;
  isLogintoHome?: boolean;
}

interface IRedirectProps {
  to: string | object;
  form: string;
  push?: boolean;
  exact?: boolean;
  strice?: boolean;
}

interface IRouteConfigProps {
  path: string[] | string;
  component: any;
  exact?: boolean;
  meta?: IMetaProps;
  redirect?: IRedirectProps;
  [propName: string]: any;
}

interface IChildrenRouteProps {
  childrenRoute?: Array<IRouteConfigProps>;
}

export interface IRouteProps extends IRouteConfigProps, IChildrenRouteProps {}
