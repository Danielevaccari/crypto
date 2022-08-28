import * as React from 'react';
import navbarIcon from '../../../media/navbariconcoin.svg';
import { ThemeContext, DarkOrLightTheme } from '../../../style/themes/themes';

export const NavbarDesktop = () => {

  const [isDarkMode, setIsDarkMode] = React.useState<boolean>(true);

  React.useEffect(() => {
    const boxes = document.querySelectorAll('*');

    boxes.forEach(box => {
      isDarkMode ? box.classList.remove("light") : box.classList.add("light");
    });
  }, [isDarkMode]);

  return (
    <nav className={`crypto-desktop-navbar-container`}>
      <div className='crypto-desktop-navbar-left'>
        <img src={navbarIcon.toString()} className='crypto-desktop-navbar-icon' alt='icon'></img>
      </div>

      <div className='crypto-desktop-navbar-middle'>

      </div>
      <div className='crypto-desktop-navbar-right'>
        <ThemeContext.Consumer>
          {({ changeTheme }) => (
            <button
              // Create button styles in css files TODO
              style={{ height: "35px", width: "100px", borderRadius: "10px", border: "0px", background: "grey" }}
              onClick={() => {
                setIsDarkMode(!isDarkMode);
                changeTheme(isDarkMode ? DarkOrLightTheme.light : DarkOrLightTheme.dark);
              }}
            >
              Change Theme
            </button>
          )}
        </ThemeContext.Consumer>
      </div>
    </nav>
  );
};
export default NavbarDesktop;
