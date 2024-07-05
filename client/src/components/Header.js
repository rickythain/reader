import React from 'react';
import './Header.css'
import { logo } from '../assets'

const Header = () => {
  return (
    <header className='header'>
      <div className='content'>
        <img className='logo' src={logo} alt="Reader's logo" />
        <div className='headline'>
          <h1 className='title'>Bookstore for you</h1>
          <p className='subtitle'>Anything, anywhere, anytime</p>
        </div>
      </div>
    </header>
  )
}

export default Header;