import React, {useContext, useState} from 'react';
import {StepsContext} from '../context/StepContext';
import { Form, Input, Button, Checkbox, Alert } from 'antd';

import 'antd/dist/antd.css'

const Login = () => {

  const {step, setStep, setLogged} = useContext(StepsContext)
  const [success, setSuccess] = useState(true)
  const onFinish = (values) => {
    handleCredentials(values)
  };

  const handleCredentials = (values) => {
    if(values.user === 'user1@mail.com' && values.password === '123456'){
      setSuccess(true)
      setStep(step + 1);
      setLogged(true)
    }
    else{
      setSuccess(false)
    }
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


  return (
    <>

    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="usuario"
        name="user"
        rules={[
          {
            required: true,
            message: 'Ingrese usuario',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="contraseña"
        name="password"
        rules={[
          {
            required: true,
            message: 'Ingrese contraseña',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Iniciar Sesion
        </Button>
      </Form.Item>
    </Form>
    {!success ? <Alert message="El usuario o la contraseña no son correctos" type="error" /> : null}
    </>
  );
};

export default Login;
