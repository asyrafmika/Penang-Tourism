import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/web.png'
import menu from '../../assets/menu-icon.png'
import { Link } from 'react-scroll';

function Navbar() {

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[])


  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () =>{
      mobileMenu? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
        <img src={logo} alt="" className="logo"/>
        <ul className={mobileMenu? '' : 'hide-mobile-menu'}>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='places' smooth={true} offset={-260} duration={500}>Places</Link></li>
            <li><Link to='about' smooth={true} offset={-220} duration={500}>About</Link></li>
            <li><Link to='gallery' smooth={true} offset={-220} duration={500}>Gallery</Link></li>
            <li><Link to='hotel' smooth={true} offset={-220} duration={500}>Hotel</Link></li>
            <li><Link to='culture' smooth={true} offset={-220} duration={500}>Culture</Link></li>
            <li><Link to='food' smooth={true} offset={-220} duration={500}>Food & Lifestyle</Link></li>
            <li><Link to='contact' smooth={true} offset={-260} duration={500} className='button'>Contact us</Link>
            </li>
        </ul>
        <img src={menu} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar