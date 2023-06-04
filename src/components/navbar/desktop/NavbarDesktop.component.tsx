import * as React from 'react';
import navbarIcon from '../../../media/navbariconcoin.svg';
import { ThemeContext, DarkOrLightTheme } from '../../../style/themes/themes';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

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
        <Stack direction="row">
          <img src={navbarIcon.toString()} className='crypto-desktop-navbar-icon' alt='icon'></img>
          <Button 
            className='crypto-desktop-text-button'
            disableRipple>
              Logo
          </Button>
          <Button 
            className='crypto-desktop-text-button'
            disableRipple>
              Trade
          </Button>
          <Button
            className='crypto-desktop-text-button'
            disableRipple>
              Markets
          </Button>
        </Stack>
      </div>

      <div className='crypto-desktop-navbar-middle'>

      </div>
      
      <div className='crypto-desktop-navbar-right'>
        <Stack direction="row" spacing={2}>
        <ThemeContext.Consumer>
          {({ changeTheme }) => (
            <IconButton aria-label="Light mode" color="inherit">
              <LightModeIcon 
                onClick={() => {
                  setIsDarkMode(!isDarkMode);
                  changeTheme(isDarkMode ? DarkOrLightTheme.light : DarkOrLightTheme.dark);
                }}
              />
            </IconButton>
          )}
        </ThemeContext.Consumer>
          <Button 
            className='crypto-desktop-text-button'
            disableRipple>
              Support
          </Button>
          <Button 
            className='crypto-desktop-text-button'
            disableRipple>
              Login
          </Button>
          <Button
            className='crypto-desktop-register-button'
            disableRipple
            variant="contained"
            color="primary">
              Register
          </Button>
        </Stack>
      </div>
    </nav>
  );
};
export default NavbarDesktop;
