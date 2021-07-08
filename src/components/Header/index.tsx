import { CSSProperties, FC } from "react";
import { Layout, Menu } from "antd";
import MyDrop from "./Drop";

const { Header } = Layout;

const MyHeader: FC<any> = () => {
  return (
    <Header>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key={1}>hello</Menu.Item>
        <Menu.Item key={2}>user</Menu.Item>
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
