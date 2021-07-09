import { FC, CSSProperties } from "react";
import { Layout } from "antd";
import My from "./Mine/My";
import MyProduct from "./Product";
import MyProject from "./Project"
const { Content } = Layout;

const MyContent: FC<any> = () => {
  return (
    <Content style={{ padding: "0 50px" }}>
      <div className="site-layout-content" style={contentStyle}>
        <My />
        <MyProduct />
        <MyProject />
      </div>
    </Content>
  );
};

const contentStyle: CSSProperties = {
  margin: "",
  minHeight: "1000px",
  padding: "24px",
  background: "#fff",
};

export default MyContent;
