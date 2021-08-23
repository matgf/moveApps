
import React, { useContext} from 'react';
import {StepsContext} from '../context/StepContext';
import { Form, Descriptions, Button } from 'antd';
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
const Summary = () => {
  const {step, setStep,setConsolidated} = useContext(StepsContext)
  const userInfo = JSON.parse(localStorage.getItem('user'))
  const carInfo = JSON.parse(localStorage.getItem('car'))
  const calendarInfo = JSON.parse(localStorage.getItem('calendar'))


  const onFinish = (values) => {

    const consolidated = {user: {...userInfo}, calendar: {...calendarInfo}, car: {...carInfo}}
    setConsolidated(consolidated)
    setStep(step + 1);
  };

  return (
  <>

  <Descriptions title="Usuario que solicita" bordered>
    <Descriptions.Item label="Nombre">{userInfo.name}</Descriptions.Item>
    <Descriptions.Item label="email">{userInfo.email}</Descriptions.Item>
    <Descriptions.Item label="Edad">{userInfo.age}</Descriptions.Item>
    <Descriptions.Item label="Direccion">{userInfo.address}</Descriptions.Item>
  </Descriptions>,

  <Descriptions title="Informacion del auto" bordered>
    <Descriptions.Item label="Tipo">{carInfo.type}</Descriptions.Item>
    <Descriptions.Item label="Año">{carInfo.yearl}</Descriptions.Item>
    <Descriptions.Item label="Color">{carInfo.color}</Descriptions.Item>
    <Descriptions.Item label="Patente">{carInfo.patent}</Descriptions.Item>
    <Descriptions.Item label="Fecha de compra">{moment(carInfo.date).format('DD-MM-YYYY')}</Descriptions.Item>
  </Descriptions>,

  <Descriptions title="Fechas" bordered>
    <Descriptions.Item label="Fecha de entrada">{moment(calendarInfo.entryDate).format('DD-MM-YYYY')}</Descriptions.Item>
    <Descriptions.Item label="Fecha de salida">{moment(calendarInfo.exitDate).format('DD-MM-YYYY')}</Descriptions.Item>
  </Descriptions>,

    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
      <Button type="primary" onClick={()=>setStep(step -1)} style={{margin: '0 8px',}}>
          Atras
        </Button>
        <Button type="primary" onClick={onFinish} style={{margin: '0 8px',}}>
          Confirmar
        </Button>
      </Form.Item>
    </Form></>
  );
};
export default Summary;