import {
  LockOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { message, Tabs } from 'antd';
import React, { useState } from 'react';
import ProForm, { ProFormCheckbox, ProFormText } from '@ant-design/pro-form';
import { useIntl, Link, history, FormattedMessage, useModel } from 'umi';
import Footer from '@/components/Footer';
import { login } from '@/services/ant-design-pro/api';
import styles from './index.less';


const Login: React.FC = () => {
  const [submitting, setSubmitting] = useState(false);
  const [type, setType] = useState<string>('account');
  const { initialState, setInitialState } = useModel('@@initialState');

  const intl = useIntl();


  // 存储用户信息
  const fetchUserInfo = async () => {
    const userInfo = await initialState?.fetchUserInfo?.();
    console.log("userinfo", userInfo)
    if (userInfo?.token) {
      localStorage.setItem('token', userInfo?.token)

    }
    if (userInfo) {
      await setInitialState((s) => ({
        ...s,
        currentUser: userInfo,
      }));
    }
  };

  const handleSubmit = async (values: API.LoginParams) => {
    setSubmitting(true);
    try {
      // 登录
      const res = await login({ ...values });
      console.log(res)
      if (res.code === 0) {
        //set token

        localStorage.setItem('token', res.data)
        
        const defaultloginSuccessMessage = intl.formatMessage({
          id: 'pages.login.success',
          defaultMessage: '登录成功！',
        });
        message.success(defaultloginSuccessMessage);

        await fetchUserInfo();
        /** 此方法会跳转到 redirect 参数所在的位置 */
        if (!history) return;
        const { query } = history.location;
        const { redirect } = query as { redirect: string };
        history.push(redirect || '/');
        return;
      }
    } catch (error) {
      const defaultloginFailureMessage = intl.formatMessage({
        id: 'pages.login.failure',
        defaultMessage: '登录失败，请重试！',
      });

      message.error(defaultloginFailureMessage);
    }
    setSubmitting(false);
  };

  return (
    <div className={styles.container}>

      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.header}>
            <Link to="/">
              <img alt="logo" className={styles.logo} src="/logo.svg" />
              <span className={styles.title}>HELLO WORLD </span>
            </Link>
          </div>
        </div>

        <div className={styles.main}>
          <ProForm initialValues={{ autoLogin: true }}
            submitter={{
              searchConfig: {
                submitText: intl.formatMessage({
                  id: 'pages.login.submit',
                  defaultMessage: '登录',
                }),
              },
              render: (_, dom) => dom.pop(),
              submitButtonProps: {
                loading: submitting,
                size: 'large',
                style: {
                  width: '100%',
                },
              },
            }}
            onFinish={async (values) => {
              handleSubmit(values as API.LoginParams);
            }}
          >
            <Tabs activeKey={type} onChange={setType}>
              <Tabs.TabPane
                key="account"
                tab={intl.formatMessage({
                  id: 'pages.login.accountLogin.tab',
                  defaultMessage: '账户密码登录',
                })}
              />
            </Tabs>


            <ProFormText
              name="account"
              fieldProps={{
                size: 'large',
                prefix: <UserOutlined className={styles.prefixIcon} />,
              }}
              placeholder={intl.formatMessage({
                id: 'account',
              })}
              rules={[
                {
                  required: true,
                  message: (
                    <FormattedMessage
                      id="pages.login.username.required"
                      defaultMessage="请输入用户名!"
                    />
                  ),
                },
              ]}
            />
            <ProFormText.Password
              name="password"
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined className={styles.prefixIcon} />,
              }}
              placeholder={intl.formatMessage({
                id: "password",
              })}
              rules={[
                {
                  required: true,
                  message: (
                    <FormattedMessage
                      id="password"
                      defaultMessage="请输入密码！"
                    />
                  ),
                },
              ]}
            />



            <div style={{ marginBottom: 24 }}>
              <ProFormCheckbox noStyle name="autoLogin">
                <FormattedMessage id="pages.login.rememberMe" defaultMessage="自动登录" />
              </ProFormCheckbox>
            </div>
          </ProForm>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
