import React, { useContext, useState } from 'react'
import './HamburgerMenu.css'
import { Link } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';


    const HamburgerMenu = () => {

        

        const { setMenu } = useContext(ShopContext)

        const [menuOpen, setMenuOpen] = useState(false);
      
        const toggleMenu = () => {
          setMenuOpen(!menuOpen);
        };

        document.body.classList.toggle('overflow-hidden', menuOpen);
      
        return (
          <div className="hamburger-menu">
            <button className="hamburger-icon" onClick={toggleMenu}> ☰ </button>
            {menuOpen && (
              <div className="sidebar">
                <div className="close-btn">
                  <button onClick={()=>{toggleMenu()}}> x </button>
                </div>
                <div className="menu">
                  <Link to='/' onClick={() => {setMenu('Shop', toggleMenu())}}> Shop </Link>
                  <Link to='/mens' onClick={() => {setMenu('Men', toggleMenu())}}> Men </Link>
                  <Link to='/womens' onClick={() => {setMenu('Women', toggleMenu())}}> Women </Link> <></>
                  <Link to='/kids' onClick={() => {setMenu('Kids', toggleMenu())}}> Kids </Link>
                </div>
              </div>
              
            )}
          </div>
        );
      };


export default HamburgerMenu