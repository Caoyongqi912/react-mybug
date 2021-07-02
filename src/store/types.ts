import { UserSate } from "./module/user/user";

export interface IStoreState {
  user: UserSate;
}

export interface IAction<T> {
  type: string;
  payload: T;
}
