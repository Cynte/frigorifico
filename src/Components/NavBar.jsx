import {React, useState, useEffect} from 'react'
import menuLogo from '../Resources/menu-svgrepo-com.svg'

const NavBar = ({logo}) => {

  const [isWideEnough, setIsWideEnough] = useState(false)

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

  return (
    <div className='navBar'>
      <img className='logo' src={logo} alt='logo'/>
      <div className='divider'>
        {isWideEnough && isScrolled && <a className='navBtn'>INICIO</a>}
        {isWideEnough && isScrolled && <a className='navBtn'>SOBRE NOSOTROS</a>}
        {isWideEnough && isScrolled && <a className='navBtn'>PRODUCTOS</a>}
        {isWideEnough && isScrolled && <a className='navBtn'>CONTACTO</a>}
        <img className='menuLogo' src={menuLogo} alt="menuLogo" />
      </div>
    </div>
  )
}

export default NavBar
