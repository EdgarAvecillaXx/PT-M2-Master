import React from 'react';

const Timer = () => {
  return (
    <div className='app'>
      <div className='time'>segundos</div>
      <div className='row'>
        <button className='button-primary'>Inicio</button>
        <button className='button-secondary'>Reset</button>
      </div>
      <div className='button'>Contador</div>
    </div>
  );
};

export default Timer;
