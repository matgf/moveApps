
import React, { createContext, useState, useEffect } from 'react';

// Crear el Context
export const StepsContext = createContext();

// Provider es donde se encuentran las funciones y state
const StepsProvider = (props) => {

    // crear el state del Context
    const [step, setStep] = useState(1);
    const [logged, setLogged] = useState(false)
    const [targetTime, setTargetTime] = useState (null)
    const [consolidated, setConsolidated] = useState({})


    const handleLogOut = () => {
        setLogged(false)
        setStep(1)
        localStorage.clear();

      }


    useEffect(() => {

        if(logged){
            setTargetTime(new Date().getTime() + 900000)
        }
        else{
            setTargetTime(null)

        }
        // eslint-disable-next-line
      },[logged]);

      useEffect(() => {
        if(step === 1 && (localStorage.getItem('calendar') || localStorage.getItem('car') || localStorage.getItem('user')))
        {
            localStorage.clear();
        }
      },[step]);

    return (
        <StepsContext.Provider
            value={{
                step,
                setStep,
                logged,
                setLogged,
                targetTime,
                handleLogOut,
                setConsolidated,
                consolidated
            }}
        >
            {props.children}
        </StepsContext.Provider>
    )
}
export default StepsProvider;