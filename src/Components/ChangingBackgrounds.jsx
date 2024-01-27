import React, { useState, useEffect } from 'react'

const ChangingBackgrounds = ({images}) => {

    const [step, setStep] = useState(0)
  
    const getBackgrounds = (images) =>{
      const imgArray = images.map((imageUrl, index)=>(
          <div key={index} className='changingBackground' style={{backgroundImage: `url(${imageUrl})`, opacity: index === step ? 1 : 0}}/>
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
  </>
  )
}

export default ChangingBackgrounds