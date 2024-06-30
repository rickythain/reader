import React from 'react';
import './Header.css'

const Header = () => {
  return (
    <header className='header'>
      <div className='content'>
        <div>reader's logo</div>
        <div>
          <h1 className='title'>Bookstore for you</h1>
          <p className='subtitle'>Anything, anywhere, anytime</p>
        </div>
      </div>
    </header>
  )
}

export default Header;