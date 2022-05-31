import React from 'react';
import navbarIcon from '../../../media/navbariconcoin.svg';

export const NavbarDesktop = () => {

  return (
    <nav className='crypto-desktop-navbar-container'>
      <div className='crypto-desktop-navbar-left'>
        <img src={navbarIcon} className='crypto-desktop-navbar-icon' alt='icon'></img>
      </div>

      <div className='crypto-desktop-navbar-middle'>

      </div>
      <div className='crypto-desktop-navbar-right'>

      </div>
    </nav>
  );
};
export default NavbarDesktop;
