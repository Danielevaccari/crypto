import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style/index.style.scss';
import ThemeContextWrapper from './style/themes/ThemeContextWrapper';

ReactDOM.render(
  <ThemeContextWrapper>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeContextWrapper>,
  document.getElementById('root')
);
