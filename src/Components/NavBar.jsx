import {React, useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

const NavBar = ({text, logo}) => {

  const [animation, setAnimation] = useState('reveal')
  const [isScrolled, setIsScrolled] = useState('unscrolled')

  useEffect(() => {
    const scrollHandler = ()=>{
      window.scrollY < 1 && setIsScrolled('unscrolled')
      window.scrollY > 0 && setIsScrolled('scrolled')
    }
    window.addEventListener('scroll', scrollHandler)

    return ()=>{
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [window.scrollY])

  const burgerClickHandler = ()=> {
    if (animation==='reveal') {setAnimation('unreveal')}
    else {setAnimation('reveal')}
  }

  return (
    <div id='navBar' className={isScrolled}>

      <div className='leftSide'>

          <Link className='flagLogo' id='spanishFlagLogo' to='/'/>
          <Link className='flagLogo' id='englishFlagLogo' to='/en'/>

      </div>
      
      <img className='mainLogo' src={logo} alt='logo'/>

      <div className='rightSide'>

        <li id='navButtons' className={animation}>
          <a>{text[0]}</a>
          <a>{text[1]}</a>
          <a>{text[2]}</a>
          <a>{text[3]}</a>
        </li>
        <label className='burgerMenu'>
          <input type='checkbox' onClick={()=>{burgerClickHandler()}}/>
        </label>

      </div>
    </div>
  )
}

export default NavBar
