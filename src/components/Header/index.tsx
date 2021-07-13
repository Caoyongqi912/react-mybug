import { FC } from "react";
import { Layout, Popover, Avatar } from "antd";
import { UserState, setUserInfo } from "src/store/module/user";
import { IHomeState } from "../Type";
import {  RouteComponentProps,withRouter } from "react-router-dom";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";
import {
  spanStyle,
  divStyle,
  MenuStyle,
  ulStyle,
  AvaStyle,
  logoutStyle,
  signout,
} from "./style";
import { removeToken } from "src/utils/cookie";
import { connect, DispatchProp } from "react-redux";
const { Header } = Layout;

type Props = ReturnType<typeof mapStateToProps> &
  IHomeState &
  DispatchProp &
  RouteComponentProps 

const MyHeader: FC<Props> = ({ collapsed, setCollapsed, userInfo ,dispatch}) => {
  const PopoverContent = (
    <div style={{width:"200px"}}>
      <div style={signout} onClick={() => logout()}>
        <PoweroffOutlined style={logoutStyle} />
        退出
      </div>
    </div>
  );
  // 登出
  const logout = async () => {
    removeToken();
    dispatch(setUserInfo({
      isLogin: false,
      userInfo: {
        account: "",
        name: "",
        uid: null,
        role: 0,
        location: "",
        token:""
      }
    }))
  };
  return (
    <Header>
      <div style={divStyle}>
        {collapsed ? (
          <MenuUnfoldOutlined onClick={setCollapsed} style={MenuStyle} />
        ) : (
          <MenuFoldOutlined onClick={setCollapsed} style={MenuStyle} />
        )}
      </div>
      <ul style={ulStyle}>
        <Popover placement="bottomRight" content={PopoverContent}>
          <li>
            <Avatar style={AvaStyle}>{userInfo.account[0]}</Avatar>
            <span style={spanStyle}>{userInfo.account}</span>
          </li>
        </Popover>
      </ul>
    </Header>
  );
};

const mapStateToProps = ({ userInfo }: UserState) => {
  return { userInfo: userInfo };
};

export default connect(mapStateToProps)(withRouter(MyHeader));
