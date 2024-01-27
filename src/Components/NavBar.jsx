import {React, useState, useEffect as onMount} from 'react'
import { Link } from 'react-router-dom'

const NavBar = ({text, logo}) => {

  const [revealedClass, setRevealedClass] = useState('')
  const [scrolledClass, setScrolledClass] = useState('')

  const scrollHandler = ()=>{
    window.scrollY < 200 && setScrolledClass('')
    window.scrollY < 200 && setRevealedClass('')
    window.scrollY >= 200 && setScrolledClass('scrolled')
    window.scrollY >= 200 && setRevealedClass('revealed')
  }

  onMount(() => {
    window.addEventListener('scroll', scrollHandler)
    console.log('event added')

    return ()=>{
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  const burgerClickHandler = ()=> {
    window.removeEventListener('scroll', scrollHandler)
    console.log('event removed?')
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
