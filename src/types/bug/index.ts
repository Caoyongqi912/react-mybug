import {
  IBuilds,
  IErrorTypes,
  IPlatForm,
  IProduct,
  ISolution,
} from "../product";


import { UserState } from "src/store/module/user";

export default interface IBug {
  title: string;
  level: string;
  priority: string;
  status: string;
  confirmed: boolean;
  createrId: UserState;
  createrName: UserState;
  stepsBody: string;
  createTime: number;
  updaterId?: UserState;
  updaterName?: UserState;
  assignedTo?: number;
  resolvedBy: number;
  mailTo?: number;
  solution?: ISolution;
  platform?: IPlatForm;
  module?: number;
  product?: IProduct;
  build?: IBuilds;
  errorType?: IErrorTypes;
  bugFile?: any;
}
