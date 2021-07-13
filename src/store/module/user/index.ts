import { Reducer } from "redux";
import { IAction } from "../../types";
import { getToken, setToken, removeToken } from "../../../utils/cookie";
import { UserType } from "./types";
import LocalStore from "../../../utils/store";
import { isPlainObject } from "lodash";

export interface UserInfo {
  department?: number | null;
  account: string;
  name: string;
  uid: number | null;
  token: string | null;
  role: number;
  location: string;
}
export interface UserState {
  userInfo: UserInfo;
  isLogin: boolean;
}

const localUser = LocalStore.getValue<UserState>(UserType.USER_KEY) || {};

const initUser: UserState = {
  userInfo: {
    token: getToken(),
    account: "",
    name: "",
    uid: null,
    role: 0,
    location:""
  },
  isLogin: false,
  ...localUser,
};

export const setUserInfo: (user: UserState | any) => IAction<UserState> = (
  user: UserState
) => ({
  type: UserType.SET_USER_INFO,
  payload: user,
});

export const logout: () => IAction<null> = () => ({
  type: UserType.USER_LOGOUT,
  payload: null,
});


//验证本地登录状态
export function validateLocalStatus() {
  let userInfo = {}
  try {
   userInfo = JSON.parse(
     window.localStorage.getItem(UserType.USER_KEY) as string
   );
   //于判断指定参数是否是一个纯粹的对象
   if (!isPlainObject(userInfo)) {
     userInfo = {};
   }
  } catch {}
  return setUserInfo(userInfo)
}




const userReducer: Reducer<UserState, IAction<any>> = (
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
