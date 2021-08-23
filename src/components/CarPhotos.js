import React, { useContext } from 'react';
import {StepsContext} from '../context/StepContext';
import { Form, Button } from 'antd';
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

/* TODO: Create this component to manage photos uploaded */
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

const CarPhotos = () => {
  const {step, setStep} = useContext(StepsContext)

  const onFinish = (values) => {
    setStep(step + 1);
  };

  return (
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>

      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
      <Button type="primary" onClick={()=>setStep(step -1)} style={{margin: '0 8px',}}>
          Atras
        </Button>
        <Button type="primary" htmlType="submit" style={{margin: '0 8px',}}>
          Guardar
        </Button>
      </Form.Item>
    </Form>
  );
};
export default CarPhotos;