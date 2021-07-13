// import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";
import store from "./store";
import Routes from "./router"
import "./Index.css";


ReactDOM.render(
  <Provider store={store}>
    <ConfigProvider locale={zhCN}>
      <Routes />
    </ConfigProvider>
  </Provider>,
  document.getElementById("root")
);
reportWebVitals();
