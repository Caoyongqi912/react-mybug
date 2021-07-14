import React, { useState } from "react";
import { FC } from "react";
import Config from "../../config";
import LocalStore from "src/utils/store";
import { Layout } from "antd";
import MySidebar from "../../components/Sidebar";
import MyHeader from "../../components/Header";
import { connect } from "react-redux";
import { UserState } from "src/store/module/user";
import { layoutStyle, sectionStyle, contentStyle } from "./style";

const { Content } = Layout;

//sider收起状态
const storageCollapsed = Number(
  LocalStore.getValue(Config.SIDEBAR_COLLAPSED) || true
);

const MyDashBoard: FC = (props) => {
  const [collapsed, setCollapsed] = useState(!storageCollapsed);
  const handleToggleCollapsed = () => {
    setCollapsed(!collapsed);
    LocalStore.setValue(Config.SIDEBAR_COLLAPSED, Number(collapsed) + "");
  };

  return (
    <section style={sectionStyle}>
      <Layout>
        <MySidebar {...{ collapsed }}>
          <Layout style={layoutStyle}>
            <MyHeader/>
            <Content style={contentStyle}>
              {React.Children.map(props.children, (child) => child)}
            </Content>
          </Layout>
        </MySidebar>
      </Layout>
    </section>
  );
};

const mapStateToProps = ({ userInfo }: UserState) => {
  return { userInfo: userInfo };
};

export default connect(mapStateToProps)(MyDashBoard);
