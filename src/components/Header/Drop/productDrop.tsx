import { memo, useCallback } from "react";
import { ClickParam } from "./type";
import { Dropdown, Menu } from "antd";
import { useHistory } from "react-router-dom";
import { FC } from "react";


function DropIterm(onMenuClick: (param: ClickParam) => void) {
  return (
    <Menu selectedKeys={[]} onClick={onMenuClick}>
      <Menu.Item key="bug">bug</Menu.Item>
      <Menu.Item key="version">版本</Menu.Item>
    </Menu>
  );
}
const ProductDrop: FC = () => {
    const history = useHistory();
    const handleMenuClick = useCallback(({ key }: ClickParam) => {
      if (key === "bug") {
        history.replace("/bug");
      }
    }, []);
     return (
       <>
         <Dropdown
           overlay={DropIterm(handleMenuClick)}
           trigger={["hover"]}
           placement={"bottomCenter"}
         >
           <div>产品</div>
         </Dropdown>
       </>
     );
    
    
}

export default memo(ProductDrop);