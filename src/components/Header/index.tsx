import { CSSProperties, FC } from "react";
import { Layout, Menu } from "antd";
import MyDrop from "./Drop/myDrop";
import UserDrop from "./Drop/userDrop";

const { Header } = Layout;

const MyHeader: FC = () => {
  return (
    <Header>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key={1}>首页</Menu.Item>
        <Menu.Item key={2}>
          <UserDrop />
        </Menu.Item>
        <Menu.Item key={3} style={drop}>
          <MyDrop />
        </Menu.Item>
      </Menu>
    </Header>
  );
};
export default MyHeader;

const drop: CSSProperties = {
  marginLeft: "auto",
};
