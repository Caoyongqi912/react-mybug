import { Component, CSSProperties } from "react";
import { Layout } from "antd";

const { Content } = Layout;

export default class MyContent extends Component {
  render() {
    return (
      <Content style={{ padding: "0 50px " }}>
        <div className="site-layout-content" style={contentStyle}>
          Content
        </div>
      </Content>
    );
  }
}
const contentStyle: CSSProperties = {
  minHeight: "1000px",
  padding: "24px",
};
