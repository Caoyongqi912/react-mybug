import { memo, useCallback } from "react";
import { ClickParam } from "./type";
import { Dropdown, Menu, Avatar } from "antd";
import { useHistory } from "react-router-dom";

function DropIterm(onMenuClick: (param: ClickParam) => void) {
  return (
    <Menu selectedKeys={[]} onClick={onMenuClick} >
      <Menu.Item key="mine">个人</Menu.Item>
      <Menu.Item key="setting">设置</Menu.Item>
    </Menu>
  );
}
function UserDrop() {
  const history = useHistory();
  const handleMenuClick = useCallback(({ key }: ClickParam) => {
    if (key === "mine") {
      history.replace("/mine");
      console.log("mine");
    } else if (key === "setting") {
      history.replace("/setting");

      console.log("setting");
    }
  }, []);
  return (
    <>
      <Dropdown
        overlay={DropIterm(handleMenuClick)}
        trigger={["hover"]}
        placement={"bottomCenter"}
      >
        <div>用户</div>
      </Dropdown>
    </>
  );
}

export default memo(UserDrop);
