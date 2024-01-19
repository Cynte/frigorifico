import {React, useState, useEffect} from 'react'
import menuLogo from '../Resources/menu-svgrepo-com.svg'
import './TopMenuBar.css'

const TopMenuBar = ({logo}) => {

  const [isWideEnough, setIsWideEnough] = useState(false)

  useEffect(() => {
    const checkSize = ()=> {
      setIsWideEnough(window.innerWidth > 800)
    }
    checkSize()
  }, [])
  

  return (
    <div className='topMenuBar'>
      <img className='logo' src={logo} alt='logo'/>
      <div className='divider'>
        {isWideEnough && <a>INICIO</a>}
        {isWideEnough && <a>SOBRE NOSOTROS</a>}
        {isWideEnough && <a>PRODUCTOS</a>}
        {isWideEnough && <a>CONTACTO</a>}
        <img className='menuLogo' src={menuLogo} alt="menuLogo" />
      </div>
    </div>
  )
}

export default TopMenuBar
