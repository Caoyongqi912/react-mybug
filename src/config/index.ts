export interface Config {
  api_url: string;
  BASE_NAME: string;
  ERROR_CODE: number;
  SUCCESS_CODE: number;
  LOGIN_EXPIRE: number;
  TOKEN_KEY: string;
  SIDEBAR_COLLAPSED: string;
}

const AdminConfig: Config = {
  api_url: "http://127.0.0.1:5000/api/",
  SUCCESS_CODE: 0,
  ERROR_CODE: 1,
  LOGIN_EXPIRE: 401,
  TOKEN_KEY: "MYBUG_TOKEN",
  BASE_NAME: "MyBug",
  SIDEBAR_COLLAPSED: "SIDEBAR_COLLAPSED",
};

export default AdminConfig;
