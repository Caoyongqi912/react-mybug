import { FC, useEffect, useMemo, useState } from "react";
import { Layout, Menu } from "antd";
import { HomeSiderMenuList } from "./menu";
import { IHomeState } from "../Type";
import { RouteComponentProps, withRouter, Link } from "react-router-dom";
import { CSSProperties } from "react";

const { Sider } = Layout;
const { SubMenu } = Menu;

type Props = IHomeState & RouteComponentProps;

const MySidebar: FC<Props> = ({ location, collapsed }) => {
  const [selectedKeys, setSelectedKeys] = useState("");
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  function hanleOpenChange(openKeys: any) {
    setOpenKeys(openKeys);
  }

  useEffect(() => {
    const pathName = location.pathname;
    const fragment = pathName.split("/").slice(0, 3);
    const prefixPath = fragment.join("/");
    if (prefixPath.length === 3) {
      for (let i = 0; i < HomeSiderMenuList.length; i++) {
        const menu = HomeSiderMenuList[i];
        if (Array.isArray(menu.children)) {
          const findIdx = menu.children.findIndex(
            (menu) => pathName === menu.path
          );
          if (findIdx !== -1) {
            setSelectedKeys(menu.children[findIdx].path);
            setOpenKeys([menu.name]);
            break;
          }
        }
        if (menu.path.indexOf(prefixPath) !== -1) {
          setSelectedKeys(menu.path);
          break;
        }
      }
    }
  }, [location.pathname]);

  const menuItems = useMemo(() => {
    return HomeSiderMenuList.map((menu) => {
      if (Array.isArray(menu.children)) {
        return (
          <SubMenu
            key={menu.name}
            title={
              <>
                {menu.icon}
                <span>{menu.name}</span>
              </>
            }
          >
            {menu.children.map((subItem) => (
              <Menu.Item key={subItem.path}>
                <Link to={subItem.path}>{subItem.name}</Link>
              </Menu.Item>
            ))}
          </SubMenu>
        );
      }
      return (
        <Menu.Item key={menu.path}>
          <Link to={menu.path}>{menu.name}</Link>
        </Menu.Item>
      );
    });
  }, []);

  return (
    <Sider
      trigger={null}
      collapsed={collapsed}
      width={190}
      className="sidebar"
      style={SiderStyle}
    >
      <Menu
        selectedKeys={[selectedKeys]}
        openKeys={openKeys}
        onOpenChange={hanleOpenChange}
        mode="inline"
        theme="dark"
      >
        {menuItems}
      </Menu>
    </Sider>
  );
};

export default withRouter(MySidebar);

const SiderStyle: CSSProperties = {
  background: "#304156",
  userSelect: "none",
};
