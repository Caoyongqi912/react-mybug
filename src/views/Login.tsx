import { CSSProperties, useCallback,FC } from "react";
import { apiUserLogin } from "./../api/user";
import { RouteComponentProps } from "react-router-dom";
import { UserState, setUserInfo } from "../store/module/user";
import { connect } from "react-redux";
import { Form, Input, Button, message } from "antd";

interface LoginProps extends RouteComponentProps {
  setUserInfo: (userInfo: UserState) => void;
}

interface FormProps {
  account?: string;
  password?: string;
}

const MyLogin: FC<LoginProps> = (props: LoginProps) =>{
  const [form] = Form.useForm();
  const next = () => {
    const params = new URLSearchParams(window.location.search);
    const redirectURL = params.get("redirectURL");
    if (redirectURL) {
      window.location.href = redirectURL;
      return;
    }
    props.history.push("/");
  };

  const onFinish = useCallback(() => {
    form.validateFields().then((res) => {
      const values = res as FormProps;
      if (values.account && values.password) {
        apiUserLogin({ account: values.account, password: values.password })
          .then(({ data }: { data: UserState }) => {
            props.setUserInfo(data);
            message.success("login success")
            next();
          })
          .catch((e) => {
            console.log(e)
            message.error(e)
          });
        return;
      }
    });
  }, []);

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
      //  onFinishFailed={onFinishFailed}
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
}
export default connect(() => ({}), {
  setUserInfo,
})(MyLogin);

const loginFormStyle: CSSProperties={
  marginTop: "200px",
  marginLeft:"100px"
}