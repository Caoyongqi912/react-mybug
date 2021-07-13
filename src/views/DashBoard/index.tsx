import React, { memo, useState } from "react";
import { FC } from "react";
import Config from "../../config";
import LocalStore from "src/utils/store";
import { Layout } from "antd";
import MySidebar from "../../components/Sidebar";
import MyHeader from "../../components/Header"
import { connect } from "react-redux";
import { UserState } from "src/store/module/user";

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
    <Layout>
      <MySidebar {...{ collapsed }}>
        <Layout className="home-layout">
          <MyHeader {...{ collapsed, setCollapsed: handleToggleCollapsed }} />
          <Content id="container">
            {React.Children.map(props.children, (child) => child)}
          </Content>
        </Layout>
      </MySidebar>
    </Layout>
  );
};

const mapStateToProps = ({ userInfo }: UserState) => {
  return { userInfo: userInfo };
};

export default connect(mapStateToProps)(memo(MyDashBoard));

