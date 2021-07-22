import { Button, Form, Input, message } from "antd";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { post } from "../../services/http-request";

export default function Register() {
  const history = useHistory();
  const [model] = useState({});
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: any) => {
    console.log(values);
    setLoading(true);
    const response = await post("register", values);
    if (response.success) {
      localStorage.setItem("token", response.data.token);
    } else {
      message.error(response.message);
    }
    setLoading(false);
  };

  return (
    <div className="login fit">
      <div className="login-wrapper">
        <div className="login-form w-full">
          <div className="login-brand">
            <h1 className="primary-color">TODO APP</h1>
          </div>
          <div className="login-form-control w-full">
            <h1 className="text-gray-800 mb-5 text-lg font-semibold">
              Sign In
            </h1>
            <Form layout="vertical" initialValues={model} onFinish={onFinish}>
              <Form.Item
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Please input your company name!",
                  },
                ]}
              >
                <Input
                  placeholder="Company name"
                  type="text"
                  className="form-control"
                />
              </Form.Item>
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
              >
                <Input
                  placeholder="Email address"
                  type="email"
                  className="form-control"
                />
              </Form.Item>
              <Form.Item name="phone" rules={[{ required: false }]}>
                <Input
                  placeholder="Phone number"
                  type="number"
                  className="form-control"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input
                  placeholder="********"
                  type="password"
                  className="form-control"
                />
              </Form.Item>
              <Form.Item name="address" rules={[{ required: false }]}>
                <Input
                  placeholder="Company address"
                  type="text"
                  className="form-control"
                />
              </Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="rounded-md mr-2 w-full"
                loading={loading}
              >
                Register
              </Button>
            </Form>
            <div className="text-center py-5 w-full">
              <div className="mb-5 text-xs">OR</div>
              <div className="flex items-center justify-center">
                <h1>Already have an account? </h1>
                <Button
                  type="link"
                  className="p-0 ml-1"
                  onClick={() => history.push("/")}
                >
                  Login
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
