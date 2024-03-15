import React, { useState } from 'react';
import './navbar.css';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { IoCloseCircle } from "react-icons/io5";
import { PiDotsNineLight } from "react-icons/pi";

const Navbar = () => {
  const [active, setActive] = useState('navBar');

  const showNav = () => {
    setActive('navBar activeNavbar');
  };

  const removeNavbar = () => {
    setActive('navBar closeNavbar');
  };

  return (
    <section className='navBarSection'>
      <header className='header flex'>
        <div className="logodiv">
          <a href="/" className="logo flex">
            <h1><MdOutlineTravelExplore className='logo' />Travel.</h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navlists grid">
            <li className="navitem">
              <a href="/" className="navLink">Home</a>
            </li>

            <li className="navitem">
              <a href="/packages" className="navLink">Packages</a>
            </li>

            <li className="navitem">
              <a href="/shop" className="navLink">Shop</a>
            </li>

            <li className="navitem">
              <a href="/about" className="navLink">About</a>
            </li>

            <li className="navitem">
              <a href="/pages" className="navLink">Pages</a>
            </li>

            <li className="navitem">
              <a href="/news" className="navLink">News</a>
            </li>

            <li className="navitem">
              <a href="/contact" className="navLink">Contact</a>
            </li>

            <button className='btn'>
              <a href="/book-now" className="navLink">Book Now</a>
            </button>
          </ul>
          <div onClick={removeNavbar} className="closeNavbar">
            <IoCloseCircle className='icon' />
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <PiDotsNineLight className='icon' />
        </div>
      </header>
    </section>
  );
};

export default Navbar;