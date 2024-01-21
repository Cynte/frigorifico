import { React, useState, useEffect } from 'react'

const ChangingText = () => {
    
    const [step, setStep] = useState(0)

    const texts = {"Misión": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu lorem elementum, condimentum erat quis, volutpat tortor. Suspendisse auctor maximus nunc, at lacinia felis auctor in. Aenean eget commodo orci. Duis maximus vulputate tellus ut elementum. Sed interdum laoreet dui.",
                "Filosofía": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac velit nec ex cursus consectetur in at urna. Sed non finibus augue. Pellentesque sed odio ut ante scelerisque tempus sit amet eget augue. Aliquam felis leo, laoreet ac nisi imperdiet.",
                "Nosotros": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed malesuada sapien. Aliquam interdum dui vel enim euismod, non lacinia justo aliquet. Phasellus vel arcu quam. Aenean imperdiet in diam ac tempus. Sed quis imperdiet lacus. Phasellus at nunc sed."}
            
    useEffect(() => {
    const intervalId = setInterval(() => {
        setStep((prevStep)=> (prevStep+1) % Object.keys(texts).length);
    }, 5000);
    return () => clearInterval(intervalId);
    });

                
  return (
    <div className='changingTextContainer'>
        <h1 className='changingH1'>{Object.keys(texts)[step]}</h1>
        <p className='changingP'>{Object.values(texts)[step]}</p>
    </div>
  )
}

export default ChangingText