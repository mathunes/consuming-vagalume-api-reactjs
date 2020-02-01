import React from 'react';
import Routes from '../../routes';
import { Reset } from 'styled-reset';
import Footer from '../Footer';

function App() {
  return (
    <React.Fragment>
      <Reset />
      <Routes />
      <Footer />
    </React.Fragment>
  );
}

export default App;
