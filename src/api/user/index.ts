import { request } from "../request"


export interface userLoginData {
  account: string;
  password: string;
}

export function apiUserLogin(data: userLoginData) {
    return request({
        method: "POST",
        url: "login",
        data
    });
}