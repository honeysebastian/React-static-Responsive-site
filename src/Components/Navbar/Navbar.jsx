import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo-restaurant.png.webp'
import menu_icon from '../../assets/menu_icon-removebg-preview.png'

const Navbar = () => {
  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  }, [])

  const [mobileMenu, setMobileMenu] = useState(false)
  const toggleMenu = () => {

    mobileMenu ? setMobileMenu((false)) : setMobileMenu(true);

  }

  return (
    <nav className={`container-container ${sticky ? `dark-nav` : ``}`}>
      <img style={{ cursor: 'pointer' }} className='logo' src={logo} alt="Company logo" />
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li>menu</li>
        <li>about</li>
        <li>blog</li>
        <li>contact</li>
        <li><button className='btn  btn-nav'>BOOK NOW</button></li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar