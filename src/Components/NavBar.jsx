import {React, useState, useEffect, useRef} from 'react'
import { Link } from 'react-router-dom'

const NavBar = ({text, logo}) => {

  const [reveal, setReveal] = useState('unreveal')
  const [isScrolled, setIsScrolled] = useState('navBarUnscrolled')

  const burgerMenu = useRef(null)

  useEffect(() => {
    const timerId = setTimeout(()=>{burgerMenu.current.click()},2000)
    
    return ()=>clearTimeout(timerId)
  }
  , [])
  

  useEffect(() => {
    const scrollHandler = ()=>{
      window.scrollY < 200 && setIsScrolled('navBarUnscrolled')
      window.scrollY >= 200 && setIsScrolled('navBarScrolled')
    }
    window.addEventListener('scroll', scrollHandler)

    return ()=>{
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [window.scrollY])

  const burgerClickHandler = ()=> {
    if (reveal==='reveal') {setReveal('unreveal')}
    else {setReveal('reveal')}
  }

  return (
    <div id='navBar' className={isScrolled}>

      <img className='mainLogo' src={logo} alt='logo'/>

      <li id='navButtons'className={reveal}>
        <Link className='spanishFlagLogo' to='/'/>
        <Link className='englishFlagLogo' to='/en'/>
        <Link className='chineseFlagLogo' to='/ch'/>
        <a className='navBtn'>{text[0]}</a>
        <a className='navBtn'>{text[1]}</a>
        <a className='navBtn'>{text[2]}</a>
        <a className='navBtn'>{text[3]}</a>
      </li>
      <label ref={burgerMenu} className='burgerMenu'>
        <input type='checkbox' onClick={()=>{burgerClickHandler()}}/>
      </label>

      <div className='invisibleCloak'/>
    </div>
  )
}

export default NavBar
