import React from 'react';
import {
  BrowserRouter as Router, Routes,
  Route
} from 'react-router-dom';
import CryptoDisplay from './components/coins-data-display/CryptoDisplay.component';
import Coinpage from './components/specific-coinpage/coinpage/Coinpage.component';
import NavbarDesktop from './components/navbar/desktop/NavbarDesktop.component';
import SidebarDesktop from './components/navbar/desktop/desktop-sidebar/SidebarDesktop.component';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <NavbarDesktop />
        <SidebarDesktop />
        <Routes>
          <Route path='/' element={<CryptoDisplay />} />
          <Route path='coins/:coinId' element={<Coinpage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
