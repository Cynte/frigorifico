import { React, useState, useEffect } from 'react'
        

const ChangingText = ({text}) => {
  
  const [step, setStep] = useState(0)

  useEffect(() => {
  setStep(0)
  const intervalId = setInterval(() => {
      setStep((prevStep)=> (prevStep+1) % Object.keys(text).length);
  }, 3000);
  return () => clearInterval(intervalId);
  },[]);

                
  return (
    <div className='changingTextContainer'>
        <h1 className='changingH1'>{Object.keys(text)[step]}</h1>
        <p className='changingP'>{Object.values(text)[step]}</p>
    </div>
  )
}

export default ChangingText