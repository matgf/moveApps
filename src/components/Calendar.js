import React, { useContext, useState} from 'react';
import moment from 'moment';

import {StepsContext} from '../context/StepContext';
import { Form, Button, DatePicker } from 'antd';
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
const Calendar = () => {
  const [form] = Form.useForm();
  const {step, setStep} = useContext(StepsContext)
  const localCalendar = JSON.parse(localStorage.getItem('calendar'))

  const [selectedDate, setSelectedDate] = useState()

  const onFinish = (values) => {
    localStorage.setItem('calendar', JSON.stringify(values))
    setStep(step + 1);
  };
  const disabledEntryDate = (current) => {
    // Can not select days before today and today
    // Only select weekdays

    return (current && current < moment().endOf('day')) || (moment(current).day() === 0 || moment(current).day() === 6) ;
  }
  const disabledExitDate = (current) => {
    // Can not select days before 7 days after the selected entry date
    // Only select weekdays
    let newDate = selectedDate
    return (current && current < moment(newDate).add(6, 'days').endOf('day')) || (moment(current).day() === 0 || moment(current).day() === 6);

  }

  const handleSelectedDate = (date, dateString) => {
    setSelectedDate(date)
    form.setFieldsValue({
      exitDate: null,

    });
  }

  if(localCalendar && !selectedDate){
    form.setFieldsValue({
      entryDate: moment(localCalendar.entryDate), exitDate: moment(localCalendar.exitDate)
    });
  }

  return (
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages} form={form}>
      <Form.Item name={['entryDate']} label="Fecha de ingreso" rules={[
          {
            required: true,
          },
        ]}>
          <DatePicker value={selectedDate} disabledDate={disabledEntryDate} onChange={handleSelectedDate}
 />
        </Form.Item>
        <Form.Item name={['exitDate']} label="Fecha de retiro" rules={[
          {
            required: true,
          },
        ]}>
          <DatePicker value={moment()} disabledDate={disabledExitDate} disabled={!selectedDate}/>
        </Form.Item>
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
export default Calendar;