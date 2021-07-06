/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component, memo } from "react";
import { Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { removeToken } from "../../../utils/cookie";
import { UserState, setUserInfo } from "../../../store/module/user";
import { connect } from "react-redux";
import { IStoreState } from "../../../store/types";
import { RouteComponentProps, withRouter } from "react-router-dom";
import store from "../../../store"

//history, location, match
interface Drop extends RouteComponentProps {
  setUserInfo: (user: UserState) => void;
}

class MyDrop extends Component<Drop> {
 
  logout = () => {
    removeToken();
    this.props.setUserInfo({
      token: "",
      account: "",
      id: 0,
      role: 0,
    });
    console.log(this.props)
    this.props.history.push("/login")
  };

  state = {
    //菜单是否显示
    visible: false,
  };

  handleMenuClick = (e: any) => {
    if (e.key === "3") {
      this.setState({ visible: false });
    }
  };

  handleVisibleChange = (flag: any) => {
    this.setState({ visible: flag });
  };

  render() {
    const menu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="1" onClick={this.logout}>
          logOut
        </Menu.Item>
      </Menu>
    );
    return (
      <Dropdown
        //菜单
        overlay={menu}
        //菜单显示状态改变时调用，参数为 visible
        onVisibleChange={this.handleVisibleChange}
        //菜单是否显示
        visible={this.state.visible}
      >
        <a onClick={(e) => e.preventDefault()}>
          hello {store.getState().user.account} <DownOutlined />
        </a>
      </Dropdown>
    );
  }
}
const MD = withRouter(MyDrop as any);

export default connect(({ user: { account } }: IStoreState) => ({ account }), {
  setUserInfo,
})(memo(MD));
