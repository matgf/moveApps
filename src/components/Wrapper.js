import React, { useState, useContext } from 'react';
import {StepsContext} from '../context/StepContext';
import CarForm from './CarForm';
import Login from './Login';
import UserForm from './UserForm';
// import CarPhotos from './CarPhotos';
import Calendar from './Calendar';
import Summary from './Summary'
import Voucher from './Voucher';
import CountDown from 'ant-design-pro/lib/CountDown';
import { Modal, Button, Result } from 'antd';



const Wrapper = () => {
    const {step, logged, targetTime, handleLogOut} = useContext(StepsContext)
    const handleTimeOut = () => {
      showModal()
      handleLogOut()
    }
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
      setIsModalVisible(true);
    };
    const handleOk = () => {
      setIsModalVisible(false);
    };

    const handleCancel = () => {
      setIsModalVisible(false);
    };

    const renderSwitch = (step) => {
      switch(step) {
        case 1:
          return (
            <Login
            />
          )
        case 2:
          return (
            <UserForm
            />
          )
          case 3:
          return (
            <CarForm
            />
          )
          // TODO: Make component with uploaded photos of a car
          // case 4:
          // return (
          //   <CarPhotos
          //   />
          // )
          case 4:
          return (
            <Calendar
            />
          )
          case 5:
          return (
            <Summary
            />
          )
          case 6:
          return (
            <Voucher
            />
          )
        default:
            // return
      }
    }
    return (
      <>
        {renderSwitch(step)}
          {logged && step !== 1? <CountDown style={{ fontSize: 20 }} target={targetTime} onEnd={handleTimeOut}/> : null}
          <Modal visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
              <Button key="submit" type="primary" onClick={handleOk}>
                Aceptar
              </Button>
            ]} >
              <Result
                title="Se ha agotado su tiempo de sesión"
              />
          </Modal>

      </>
    )

}

export default Wrapper;