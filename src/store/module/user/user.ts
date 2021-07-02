import { Reducer } from "redux";
import { IAction } from "../../types";
import { getToken, setToken, removeToken } from "../../../utils/cookie";
import { UserType } from "./usertype";
import LocalStore from "../../../utils/store";
export interface UserSate {
  token: string;
  account: string;
  id: number;
  role: number;
}

const initUser: UserSate = {
  token: getToken(),
  account: "",
  id: 0,
  role: 0,
};

export const setUserInfo: (user: UserSate) => IAction<UserSate> = (
  user: UserSate
) => ({
  type: UserType.SET_USER_INFO,
  payload: user,
});

export const logout: () => IAction<null> = () => ({
  type: UserType.USET_LOGOUT,
  payload: null,
});

const userReducer: Reducer<UserSate, IAction<any>> = (
  state = initUser,
  actions: IAction<any>
) => {
  const { type, payload } = actions;
  switch (type) {
    case UserType.SET_USER_INFO:
      setToken(payload.token);
      LocalStore.setValue(UserType.USER_KEY, payload);
      return {
        ...payload,
      };
    case UserType.USET_LOGOUT:
      removeToken();
      LocalStore.removeValue(UserType.USER_KEY);
      return {
        ...initUser,
      };
    default:
      return state;
  }
};


export default userReducer;