import { Reducer } from "redux";
import { IAction } from "../../types";
import { getToken, setToken, removeToken } from "../../../utils/cookie";
import { UserType } from "./types";
import LocalStore from "../../../utils/store";
export interface UserState {
  token: string;
  account: string;
  id: number;
  role: number;
}

const localUser = LocalStore.getValue<UserState>(UserType.USER_KEY) || {}

const initUser: UserState = {
  token: getToken(),
  account: "",
  id: 0,
  role: 0,
  ...localUser
};

export const setUserInfo: (user: UserState) => IAction<UserState> = (
  user: UserState
) => ({
  type: UserType.SET_USER_INFO,
  payload: user,
});

export const logout: () => IAction<null> = () => ({
  type: UserType.USER_LOGOUT,
  payload: null,
});

const userReducer: Reducer<UserState, IAction<any>> = (
  state = initUser,
  actions: IAction<any>
) => {
  const { type, payload } = actions;
  switch (type) {
    case UserType.SET_USER_INFO:
      setToken(payload.token);
      LocalStore.setValue(UserType.USER_KEY, payload);
      console.log(payload)
      return {
        ...payload,
      };
    case UserType.USER_LOGOUT:
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