import { Row, Col, Card } from "antd";
import { memo } from "react";
import { connect } from "react-redux";
import { UserState, setUserInfo } from "src/store/module/user";
import { IStoreState } from "src/store/types";

interface IMy {
  account: string;
  setUserInfo: (user: UserState) => void;
}

function My(props: IMy) {
  return (
    <>
      <Row>
        <Col span={24}>
          <Card hoverable={true} title={"hello " + props.account}>
            ...
          </Card>
        </Col>
      </Row>
       
    </>
  );
}

export default connect(({ user: { account } }: IStoreState) => ({ account }), {
  setUserInfo,
})(memo(My));
