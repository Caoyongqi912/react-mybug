import { FC, memo, useEffect, useState } from "react";
import { getProjectInfo } from "src/api/project";
import { IProject } from "src/types/project";
import { Col, Card, List } from "antd";

const MyProject: FC = () => {
  const [listData, setlistData] = useState<IProject[]>();

  const getProjectData = async () => {
    const { data } = await getProjectInfo();
    setlistData(data);
  };

  useEffect(() => {
    getProjectData();
  }, []);
    return (
      <Col span={11}>
        <Card hoverable={true} title={"项目"}>
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
};

export default memo(MyProject);
