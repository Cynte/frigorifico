import {React, useState, useEffect} from 'react'
import menuLogo from '../Resources/menu-svgrepo-com.svg'

const NavBar = ({logo}) => {

  const [visible, setVisible] = useState(false)
  const [isWideEnough, setIsWideEnough] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    setIsWideEnough(window.innerWidth > 800)
  }, [])

  useEffect(() => {
    const checkScroll = ()=>{
      setIsScrolled(window.scrollY!==0)
    }
    window.addEventListener('scroll', checkScroll)

    return ()=>{
      window.removeEventListener('scroll', checkScroll)
    }

  }, [window.scrollY])

  const burgerClickHandler = ()=> {
    setVisible(!visible)
  }

  return (
    <div className='navBar'>
      <img className='mainLogo' src={logo} alt='logo'/>
      {isWideEnough && <div className='pcButtons'>
        {visible && <a className='navBtn'>INICIO</a>}
        {visible && <a className='navBtn'>SOBRE NOSOTROS</a>}
        {visible && <a className='navBtn'>PRODUCTOS</a>}
        {visible && <a className='navBtn'>CONTACTO</a>}
      </div>}
        <img onClick={()=>{burgerClickHandler()}} className='menuLogo' src={menuLogo} alt="menuLogo" />
    </div>
  )
}

export default NavBar
