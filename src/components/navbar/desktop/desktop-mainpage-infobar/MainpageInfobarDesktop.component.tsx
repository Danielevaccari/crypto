import React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Coincard } from './desktop-mainpage-coincard/Coincard';

const GetStartedButton = styled(Button)({
  textTransform: 'none',
  fontSize: '1.1rem',
  padding: '10px 50px 10px 50px',
  border: '1px solid',
  lineHeight: 1,
  fontWeight: 500,
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

const MainpageInfobarDesktop = () => {

  return (
    <div className='crypto-desktop-mainpage-infobar-container'>
      <div className='crypto-desktop-mainpage-infobar-left'>
        <h1>Header</h1>
        <p className='crypto-desktop-mainpage-infobar-left-paragraph'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <GetStartedButton
          disableRipple
          variant="contained"
          color="primary">
            Get started
        </GetStartedButton>
      </div>
      <div className='crypto-desktop-mainpage-infobar-right'>
        <Coincard coinId={1}></Coincard>
        <Coincard coinId={2}></Coincard>
        <Coincard coinId={3}></Coincard>
        <Coincard coinId={4}></Coincard>
      </div>
    </div>
  );
};

export default MainpageInfobarDesktop;