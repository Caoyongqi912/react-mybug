import { Component, CSSProperties, RefObject } from "react";
import { apiUserLogin, userLoginData } from "../api/user";
import { RouteComponentProps } from "react-router-dom";
import { UserState, setUserInfo } from "../store/module/user";
import { connect } from 'react-redux';
import { Form, Input, Button, FormInstance, message } from 'antd';
import { createRef } from "react";


interface LoginProps extends RouteComponentProps {
  setUserInfo: (userInfo: UserState) => void;
}


class Login extends Component<LoginProps> {
  form: RefObject<FormInstance>;

  constructor(props: LoginProps) {
    super(props)
    this.form = createRef<FormInstance>()
  }


  next = () => {
    const params = new URLSearchParams(window.location.search);
    const redirectURL = params.get("redirectURL");
    if (redirectURL) {
      window.location.href = redirectURL;
      return;
    }
    this.props.history.push("/");
  };


  onFinish = (form: userLoginData) => {
    console.log(form)
    apiUserLogin(form)
    .then(({ data }: { data: UserState })=> {
      message.success("success")
      this.props.setUserInfo(data);
      this.next();

    }).catch((error) => {
      message.error("some error")
    })

  }
  onFinishFailed = () => {

  }

  render() {
    return (

        <Form
          ref={this.form}
          name="basic"
          size="middle"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 5 }}
          initialValues={{ remember: true }}
          // style= {loginFormStyle}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
          
        >
          <Form.Item
            label="Account"
            name="account"
            rules={[{ required: true, message: 'Please input your account!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
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
}
export default connect(() => ({}), {
  setUserInfo,
})(Login);



const loginFormStyle :CSSProperties= {
  textAlign:'center'

  
}