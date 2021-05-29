import { Button, Form, Input } from 'antd';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { post } from '../../services/http-request';
import './style.css';

export default function Login() {
  const history = useHistory();
  const [model, setModel] = useState({ email: '', password: '' });

  const onFinish = async (values: any) => {
    console.log(values);
    const response = await post('login', values)
    console.log(response)
  };
  return (
    <div className="login fit">
      <div className="login-wrapper">
        <div className="login-form w-full">
          <div className="login-brand">
            <h1 className="primary-color">TODO APP</h1>
          </div>
          <div className="login-form-control w-full">
            <Form layout="vertical" initialValues={model} onFinish={onFinish}>
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: 'Please input your email!' },
                ]}
              >
                <Input
                  placeholder="Email address"
                  type="email"
                  className="form-control"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input
                  placeholder="********"
                  type="password"
                  className="form-control"
                />
              </Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="rounded-md mr-2 w-full"
              >
                Login
            </Button>
            </Form>
            <div className="text-center py-5 w-full">
              <div className="mb-5 text-xs">OR</div>
              <a href="" className="cursor-pointer primary-color text-xs">
                Forgot Password ?
              </a>
            </div>
          </div>
        </div>
        <div className="login-signup">
          <h1>Don't have an account? </h1>
          <Button type="link" className="p-0 ml-1">
            Sign up
          </Button>
        </div>
      </div>
    </div>
  );
}
