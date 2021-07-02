import { Component } from "react";
import { apiUserLogin, userLoginData } from "../api/user";
import { Link, RouteComponentProps } from "react-router-dom";
import { UserSate } from "../store/module/user/user";
import { nextTick } from "process";

interface LoginProps extends RouteComponentProps {
  setUserInfo: (userInfo: UserSate) => void;
}
export default class Login extends Component<LoginProps> {
  next = () => {
    const params = new URLSearchParams(window.location.search);
    const redirectURL = params.get("redirectURL");
    if (redirectURL) {
      window.location.href = redirectURL;
      return;
    }
    this.props.history.push("/");
  };

  componentDidMount() {
    console.log("login");
    apiUserLogin({ account: "cyq", password: "cyq" })
      .then((res) => {
        console.log(res.data);
      })
      .then(({ data }: { data: UserState }) => {
        this.props.setUserInfo(data);
        this.next();
      })
      .catch((error) => {
        console.log("error =", error);
      });
  }
  render() {
    return <>Login</>;
  }
}
