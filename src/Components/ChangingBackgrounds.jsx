import React, { useState, useEffect } from 'react'

const ChangingBackgrounds = ({images}) => {

    const [step, setStep] = useState(0)

    const stepChangeHandler = (event) => {
      setStep(parseInt(event.target.value))
    }
  
    const getBackgrounds = (images) =>{
      const imgArray = images.map((imageUrl, index)=>(
          <div key={index} className='background' style={{backgroundImage: `url(${imageUrl})`, opacity: index === step ? 1 : 0}}/>
      ))
      return imgArray
    }
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setStep((prevStep) => (prevStep + 1) % images.length);
      }, 10000);
      return () => clearInterval(intervalId);
    }, [images.length]);


  return (
  <>
    {getBackgrounds(images)}
    <input className='slider' hidden='true' type='range' min='0' max={images.length - 1} step='0' value={step} onChange={stepChangeHandler}/>
  </>
  )
}

export default ChangingBackgrounds