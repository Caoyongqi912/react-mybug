export interface Config {
  api_url: string;
  BASE_NAME: string;
  ERROR_CODE: number;
  SUCCESS_CODE: number;
  LOGIN_EXPIRE: number;
  TOKEN_KEY: string;
}

const AdminConfig: Config = {
  api_url: "http://127.0.0.1:5000/api/",
  SUCCESS_CODE: 0,
  ERROR_CODE: 1,
  LOGIN_EXPIRE: 401,
  TOKEN_KEY: "MYBUG_TOKEN",
  BASE_NAME: "MyBug",
};

export default AdminConfig;
