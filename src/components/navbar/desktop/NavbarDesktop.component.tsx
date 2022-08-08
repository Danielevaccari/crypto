import React from 'react';
import navbarIcon from '../../../media/navbariconcoin.svg';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const RegisterButton = styled(Button)({
  textTransform: 'none',
  fontSize: '.9rem',
  padding: '0 10px!important',
  border: '1px solid',
  lineHeight: 1,
  fontWeight: 400,
  backgroundColor: '#047bf8',
  borderColor: '#047bf8',
  fontFamily: [
    'Proxima',
    'Nova',
    'W01',
    'Roboto',
    'Rubik',
    '-apple-system',
    'system-ui',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Helvetica Neue',
    'Arial',
    'sans-serif'
  ].join(','),
});

const TextButton = styled(Button)({
  textTransform: 'none',
  fontSize: '.9rem',
  padding: '6px 12px',
  border: '0px',
  lineHeight: 1.5,
  fontWeight: 400,
  color: 'white',
  backgroundColor: 'none',
  borderColor: 'none',
  fontFamily: [
    'Proxima',
    'Nova',
    'W01',
    'Roboto',
    'Rubik',
    '-apple-system',
    'system-ui',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Helvetica Neue',
    'Arial',
    'sans-serif'
  ].join(','),
});

export const NavbarDesktop = () => {

  return (
    <nav className='crypto-desktop-navbar-container'>
      <div className='crypto-desktop-navbar-left'>
        
        <Stack direction="row">
          <img src={navbarIcon} className='crypto-desktop-navbar-icon' alt='icon'></img>
          <TextButton disableRipple>
              Logo
          </TextButton>
          <TextButton disableRipple>
              Trade
          </TextButton>
          <TextButton disableRipple>
              Markets
          </TextButton>
        </Stack>
      </div>

      <div className='crypto-desktop-navbar-middle'>

      </div>
      <div className='crypto-desktop-navbar-right'>

        <Stack direction="row" spacing={2}>
          <IconButton aria-label="Light mode" color="inherit">
            <LightModeIcon />
          </IconButton>
          <TextButton disableRipple>
              Support
          </TextButton>
          <TextButton disableRipple>
              Login
          </TextButton>
          <RegisterButton
            disableRipple
            variant="contained"
            color="primary">
              Register
          </RegisterButton>
        </Stack>
      </div>
    </nav>
  );
};
export default NavbarDesktop;
