import { FC, CSSProperties } from "react";
import { Layout } from "antd";

const { Content } = Layout;

const MyContent: FC<any> = () => {
  return (
    <Content style={{ padding: "0 50px " }}>
      <div className="site-layout-content" style={contentStyle}>
        Content
      </div>
    </Content>
  );
};

const contentStyle: CSSProperties = {
  margin: "",
  minHeight: "1000px",
  padding: "24px",
};

export default MyContent;
