import { Layout } from "antd";
import { FC } from "react";

const { Footer } = Layout;
const MyFooter: FC<any> = () => {
  return (
    <Footer style={{ textAlign: "center" }}>
      Ant Design ©2018 Created by Ant UED
    </Footer>
  );
};

export default MyFooter;
