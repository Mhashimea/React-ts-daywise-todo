import { Button, Form, Input } from 'antd'
import React from 'react'
import { useHistory } from 'react-router';
import './style.css'


export default function Login() {
  const history = useHistory();
  return (
    <div className="login fit">
      <div className="login-wrapper">
        <div className="login-form">
          <div className="login-brand">
            <h1 className="primary-color">TODO APP</h1>
          </div>
          <div className="login-form-control">
            <Form>
              <Input placeholder="Mobile Number" type="number" className="form-control" />
              <Input placeholder="********" type="password" className="form-control" />
              <Button type="primary" className="w-full" onClick={() => history.push('/dashboard')}>Login</Button>
            </Form>
            <div className="text-center py-5 w-full">
              <div className="mb-5 text-xs">
                OR
              </div>
              <a href="" className="cursor-pointer primary-color text-xs">Forgot Password ?</a>
            </div>
          </div>
        </div>
        <div className="login-signup">
          <h1>Don't have an account? </h1>
          <Button type="link" className="p-0 ml-1">Sign up</Button>
        </div>
      </div>
    </div>
  )
}