import React, { useContext } from 'react';
import {StepsContext} from '../context/StepContext';
import { Form, Input, InputNumber, Button } from 'antd';
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */

const UserForm = () => {
  const {step, setStep, handleLogOut} = useContext(StepsContext)
  const localUser = JSON.parse(localStorage.getItem('user'))
  const [form] = Form.useForm();
  if(localUser){
    form.setFieldsValue({
      name: localUser.name, email: localUser.email, age: localUser.age, address: localUser.address
    });
  }

  const onFinish = (values) => {
    localStorage.setItem('user', JSON.stringify(values))
    setStep(step + 1);
  };

  return (
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages} form={form}>
      <Form.Item
        name={['name']}
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={[ 'email']}
        label="Email"
        rules={[
          {
            type: 'email',
            required: true
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['age']}
        label="Age"
        rules={[
          {
            type: 'number',
            min: 0,
            max: 150,
            required: true,
          },
        ]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item name={['address']} label="Address"
              rules={[
                {
                  required: true,
                  message: "AAA"
                },
              ]}>
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
      <Button type="primary" onClick={()=>handleLogOut()} style={{margin: '0 8px',}}>
          Cerrar Sesion
        </Button>
        <Button type="primary" htmlType="submit" style={{margin: '0 8px',}}>
          Guardar
        </Button>
      </Form.Item>
    </Form>
  );
};
export default UserForm;