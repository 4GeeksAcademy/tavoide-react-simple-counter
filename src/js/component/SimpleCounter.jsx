import React, { useState, useEffect } from 'react';
// import { BiAlarm } from "react-icons/bi";


const SimpleCounter = () => {
  const [seconds, setSeconds] = useState(0);
  const [digits, setDigits] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const interval= setInterval(()=>{
      const digitsArray= seconds.toString().padStart(4, "0").split("");

      setDigits(digitsArray);
      setSeconds((prevSeconds)=> prevSeconds + 1);
    },1000);

    return() => clearInterval(interval);
}, [seconds]);

  return (
    
    <div className='container row d-flex bg-secondary d-grid vh-100 m-auto'>
       
       <div>
        <h1 className='text-warning mt-4'>UN SIMPLE CONTADOR DE SEGUNDOS!!</h1>
        </div>

      <div className='col' ><p className='fs-1 bg-black text-warning'>{digits[0]}</p></div>
      <div className='col'><p className='fs-1 bg-black text-warning'>{digits[1]}</p></div>
      <div className='col'><p className='fs-1 bg-black text-warning'>{digits[2]}</p></div>
      <div className='col'><p className='fs-1 bg-black text-warning'>{digits[3]}</p></div>
      
    </div>
  );
};

export default SimpleCounter