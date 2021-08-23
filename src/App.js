import React from 'react';
import StepsProvider from './context/StepContext'
import './App.css';
import Wrapper from './components/Wrapper';



const App = () => {
  return (
<StepsProvider>
  <div style={{width: '50%', alignContent: 'center', margin:'40px'}}>
  <Wrapper/>
  </div>
</StepsProvider>

  );
}

export default App;
