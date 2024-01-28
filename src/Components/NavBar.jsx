import {React, useState, useEffect as onMount, useCallback} from 'react'
import { Link } from 'react-router-dom'

const NavBar = ({text, logo}) => {

  const [revealedClass, setRevealedClass] = useState('')
  const [scrolledClass, setScrolledClass] = useState('')

  const scrolledOnScroll = useCallback(()=> {
    setScrolledClass(window.scrollY > 200 ? 'scrolled' : '')
  }, []
  )

  const revealedOnScroll = useCallback(() => {
        setRevealedClass(window.scrollY > 200 ? 'revealed' : '')
      }, []
  )

  onMount(() => {
    window.addEventListener('scroll', scrolledOnScroll)
    window.addEventListener('scroll', revealedOnScroll)
    return ()=>{
      window.removeEventListener('scroll', scrolledOnScroll)
    }
  }, [scrolledOnScroll])

  const burgerClickHandler = ()=> {
    window.removeEventListener('scroll', revealedOnScroll)
    if (revealedClass==='revealed') {setRevealedClass('')}
    else {setRevealedClass('revealed')}
  }

  return (
    <div className={'navBar ' + scrolledClass}>
      <img className='mainLogo' src={logo} alt='logo'/>

      <li className={'clickablesContainer ' + revealedClass}>
        <Link className='flag spanishFlag' to='/'/>
        <Link className='flag englishFlag' to='/en'/>
        <Link className='flag chineseFlag' to='/ch'/>
        
        <a className='navBtn'>{text[0]}</a>
        <a className='navBtn'>{text[1]}</a>
        <a className='navBtn'>{text[2]}</a>
        <a className='navBtn'>{text[3]}</a>

        <div className='burgerMenu' onClick={()=>{burgerClickHandler()}}>
          <div/>
        </div>
      </li>

      <div className='gradient'/>
    </div>
  )
}

export default NavBar
