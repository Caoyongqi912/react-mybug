import { memo, useCallback } from "react";
import { Dropdown, Menu, Avatar } from "antd";
import { removeToken } from "../../../utils/cookie";
import { UserState, setUserInfo } from "../../../store/module/user";
import { connect } from "react-redux";
import { IStoreState } from "src/store/types";
import { useHistory } from "react-router-dom";
import { LogoutOutlined, EditOutlined, MehOutlined } from "@ant-design/icons";
import { ClickParam } from "./type";

interface IDrop {
  account: string;
  setUserInfo: (user: UserState) => void;
}


function DropIterm(onMenuClick: (param: ClickParam) => void) {
  return (
    <Menu selectedKeys={[]} onClick={onMenuClick}>
      <Menu.Item key="mine">
        <MehOutlined />
        个人
      </Menu.Item>
      <Menu.Item key="setting">
        <EditOutlined />
        设置
      </Menu.Item>
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
    <Dropdown overlay={DropIterm(handleMenuClick)} trigger={["hover"]} placement={"bottomCenter"}>
      <div>
        <Avatar style={{ color: "#f56a00", backgroundColor: "#fde3cf" }}>
          {props.account[0]}
        </Avatar>
      </div>
    </Dropdown>
  );
}

export default connect(({ user: { account } }: IStoreState) => ({ account }), {
  setUserInfo,
})(memo(MyDrop));
