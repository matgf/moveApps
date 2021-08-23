import React, { useContext} from 'react';
import { Result, Button } from 'antd';
import {StepsContext} from '../context/StepContext';
import { SmileOutlined } from '@ant-design/icons';


const Voucher = () => {

  const {handleLogOut, consolidated} = useContext(StepsContext)

  const handleSubmit = () => {
    console.log(consolidated)
    handleLogOut()
  }
  return(<>
    <Result
    icon={<SmileOutlined />}
    title="Solicitud generada correctamente"
    subTitle="Para enviar solicitud haga click en el siguiente boton"
    extra={[
      <Button type="primary" key="console" onClick={handleSubmit}>
        Enviar formulario
      </Button>,
    ]}
  /></>);
}

export default Voucher;