/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { memo, useCallback } from "react";
import { Dropdown, Menu, Avatar } from "antd";
import { removeToken } from "../../../utils/cookie";
import { UserState, setUserInfo } from "../../../store/module/user";
import { connect } from "react-redux";
import { IStoreState } from "src/store/types";
import { useHistory } from "react-router-dom";
import { LogoutOutlined } from "@ant-design/icons";
interface IDrop {
  account: string;
  setUserInfo: (user: UserState) => void;
}
interface ClickParam {
  key: string;
}

function DropIterm(onMenuClick: (param: ClickParam) => void) {
  return (
    <Menu selectedKeys={[]} onClick={onMenuClick}>
      <Menu.Divider />
      <Menu.Item key="logout">
        <LogoutOutlined />
        退出登录
      </Menu.Item>
    </Menu>
  );
}

function MyDrop(props: IDrop) {
  const history = useHistory();

  const handleMenuClick = useCallback(({ key }: ClickParam) => {
    if (key === "logout") {
      removeToken();
      props.setUserInfo({
        name: "",
        token: "",
        account: "",
        department: null,
        role: 0,
        uid: null,
      });
      history.replace("/login");
    }
  }, []);

  return (
    <Dropdown overlay={DropIterm(handleMenuClick)} trigger={["hover"]}>
      <div>
        <Avatar size="small" src="../../../assert/ava.jpeg" alt="avatar" />
        <span>  {props.account}</span>
      </div>
    </Dropdown>
  );
}

export default connect(({ user: { account } }: IStoreState) => ({ account }), {
  setUserInfo,
})(memo(MyDrop));
