import * as React from 'react';
import navbarIcon from '../../../media/navbariconcoin.svg';
import { ThemeContext, DarkOrLightTheme } from '../../../style/themes/themes';

export const NavbarDesktop = () => {

  const [isDarkMode, setIsDarkMode] = React.useState<boolean>(true);
  const theme = React.useContext(ThemeContext);

  return (
    <nav className={`crypto-desktop-navbar-container ${theme.theme}`}>
      <div className='crypto-desktop-navbar-left'>
        <img src={navbarIcon.toString()} className='crypto-desktop-navbar-icon' alt='icon'></img>
      </div>

      <div className='crypto-desktop-navbar-middle'>

      </div>
      <div className='crypto-desktop-navbar-right'>
        <ThemeContext.Consumer>
          {({ changeTheme }) => (
            <button
              onClick={() => {
                setIsDarkMode(!isDarkMode);
                changeTheme(isDarkMode ? DarkOrLightTheme.light : DarkOrLightTheme.dark);
              }}
            >

            </button>
          )}
        </ThemeContext.Consumer>
      </div>
    </nav>
  );
};
export default NavbarDesktop;
