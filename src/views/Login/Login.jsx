import React from "react";
import { Card, Form, Input, Button, Row, Col } from "antd";
import { useLocation, useHistory } from "react-router-dom";
import { LinkOutlined } from "@ant-design/icons";
// import { getUserId } from '../../modules/common/utils';
import _ from "lodash";

import "./login.scss";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const Login = (props) => {
  const location = useLocation();

  // console.log(!_.isNil(getUserId()));

  // if (!_.isNil(getUserId())) {
  //   history.push('/dashboard');
  // }

  const handleLogin = (values) => {
    // values.confirm && delete values.confirm;
    // props.signin({ ...values });
  };

  return (
    <>
      <div className="main-container">
        <Row justify="center" align="middle">
          <Col>
            <h1>Login</h1>
            <div className="login-container">
              <div className="form-container">
                <Card>
                  <Form
                    {...layout}
                    name="login"
                    initialValues={{}}
                    onFinish={handleLogin}
                  >
                    <Form.Item
                      label="Email"
                      name="email"
                      className="login-form-labels"
                      rules={[
                        {
                          required: true,
                          type: "email",
                        },
                      ]}
                    >
                      <Input placeholder="Email" />
                    </Form.Item>

                    <Form.Item
                      label="Password"
                      name="password"
                      className="login-form-labels"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <Input.Password placeholder="Password" />
                    </Form.Item>

                    <span className="lbl-forgot-password">
                      <a className="login-form-forgot" href="/forgot-password">
                        Forgot Password?
                      </a>
                    </span>

                    <span className="btn-login">
                      <Button
                        type="primary"
                        shape="round"
                        htmlType="submit"
                        icon={<LinkOutlined />}
                        size="middle"
                        style={{ width: 200 }}
                        loading={props.loading}
                      >
                        Login
                      </Button>
                    </span>
                    {/* </Form.Item> */}
                  </Form>
                </Card>
              </div>
            </div>
          </Col>
        </Row>
        <div>
          <a href="/" className="contact-support">
            Contact Support
          </a>
        </div>
      </div>
    </>
  );
};

export default Login;
