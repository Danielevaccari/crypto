import React from 'react';
import {
  BrowserRouter as Router, Routes,
  Route
} from 'react-router-dom';
import CryptoDisplay from './components/coins-data-display/CryptoDisplay.component';
import Coinpage from './components/specific-coinpage/coinpage/Coinpage.component';
import NavbarDesktop from './components/navbar/desktop/NavbarDesktop.component';
import MainpageInfobarDesktop from './components/navbar/desktop/desktop-mainpage-infobar/MainpageInfobarDesktop.component';
import Stack from '@mui/material/Stack';

const App: React.FC = () => {
  return (
    <>
      <Router>        
        <Routes>
          <Route path='/' element={
            <Stack>
              <NavbarDesktop />
              <MainpageInfobarDesktop /> 
              <CryptoDisplay />
            </Stack>
          } />
          <Route path='coins/:coinId' element={
            <Stack>              
              <NavbarDesktop />
              <Coinpage />
            </Stack>
          } />
        </Routes>
      </Router>
    </>
  );
};

export default App;
