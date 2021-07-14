import { CSSProperties, FC } from "react";
import { apiUserLogin } from "../../api/user";
import { RouteComponentProps } from "react-router-dom";
import { UserState, setUserInfo } from "../../store/module/user";
import { connect } from "react-redux";
import { Form, Input, Button, message } from "antd";
import { useState } from "react";
import qs from "query-string";

interface LoginProps extends RouteComponentProps {
  setUserInfo: (userInfo: UserState) => void;
}

interface FormProps {
  account?: string;
  password?: string;
}

/**
 * 登录
 * @param param0
 * @param props 
 * @returns 
 */
const MyLogin: FC<LoginProps> = ({ history, location ,setUserInfo}) => {
  const [form] = Form.useForm();
  const [redirectUrl] = useState(() => {
    const url = qs.parse(location.search).redirectUrl as string;
    return url || "/home/index";
  });

  const onFinish = async () => {
    form.validateFields().then((res) => {
      const values = res as FormProps;
      if (values.account && values.password) {
        apiUserLogin({ account: values.account, password: values.password })
          .then(({ data }: { data: UserState }) => {
            setUserInfo(data);
            message.success("login success");
            history.replace(redirectUrl);
          })
          .catch((e) => {
            console.log(e);
          });
        return;
      }
    });
  };

  return (
    <Form
      form={form}
      name="basic"
      size="middle"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 5 }}
      initialValues={{ remember: true }}
      style={loginFormStyle}
      onFinish={onFinish}
    >
      <Form.Item
        label="Account"
        name="account"
        rules={[{ required: true, message: "Please input your account!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};
export default connect(() => ({}), {
  setUserInfo,
})(MyLogin);

const loginFormStyle: CSSProperties = {
  marginTop: "200px",
  marginLeft: "100px",
  minHeight: "100vh",
};
