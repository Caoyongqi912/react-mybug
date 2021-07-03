import { UserState } from "../../store/module/user";
import { request } from "../request"


export interface userLoginData {
  account: string;
  password: string;
}

export function apiUserLogin(data: userLoginData) {
    return request<UserState>({
        method: "POST",
        url: "login",
        data
    });
}