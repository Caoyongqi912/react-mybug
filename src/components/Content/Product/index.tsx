import { Col, Card, List } from "antd";
import { memo, useEffect, useState } from "react";
import { getProduct } from "src/api/product";
import { IProduct } from "src/types/product";

function MyProduct() {
  const [listData, setListData] = useState<IProduct[]>();

  const getProductInfos = async () => {
    const { data } = await getProduct();
    setListData(data);
  };

  useEffect(() => {
    getProductInfos();
  }, []);

  return (
    <Col span={11}>
      <Card hoverable={true} title={"产品"}>
        <List
          itemLayout="horizontal"
          dataSource={listData}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                title={<a href={item.id.toString()}>{item.name}</a>}
              />
            </List.Item>
          )}
        ></List>
      </Card>
    </Col>
  );
}

export default memo(MyProduct);
