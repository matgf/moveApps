import React, { useContext} from 'react';
import {StepsContext} from '../context/StepContext';
import { Form, Input, InputNumber, Button, DatePicker } from 'antd';
import moment from 'moment';

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

const CarForm = () => {
  const {step, setStep} = useContext(StepsContext)

  const localCar = JSON.parse(localStorage.getItem('car'))
  const [form] = Form.useForm();
  if(localCar){
    form.setFieldsValue({
      type: localCar.type, year: localCar.year, color: localCar.color, patent: localCar.patent, date: moment(localCar.date)
    });
  }
  const onFinish = (values) => {
    localStorage.setItem('car', JSON.stringify(values))
    setStep(step+1)
/* eslint-disable no-template-curly-in-string */
  };


  return (
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages} form={form}>
      <Form.Item
        name={['type']}
        label="Tipo de auto"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['year']}
        label="Año"
        rules={[
          {
            type: 'number',
            min: 1970,
            max: 2022,
            required: true
          },
        ]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item
        name={['color']}
        label="Color"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['patent']}
        label="Placa"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item name={['date']} label="Fecha de compra" rules={[
          {
            required: true,
          },
        ]}>
          <DatePicker />
        </Form.Item>


      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
      <Button type="primary" onClick={()=>setStep(step-1)} style={{margin: '0 8px',}}>
          Atras
        </Button>
        <Button type="primary" htmlType="submit" style={{margin: '0 8px',}}>
          Guardar
        </Button>
      </Form.Item>
    </Form>
  );
};
export default CarForm;