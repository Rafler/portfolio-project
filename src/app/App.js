import React from 'react';
import './App.scss';

import Header from '../components/Header/Header';
import About from '../components/About/About';
import Portfolio from '../components/Portfolio/Portfolio';
import Skills from '../components/Skills/Skills';
import Contacts from '../components/Contacts/Contacts';

function App() {
  return (
      <>
        <Header/>
        <About/>
        <Skills/>
        <Portfolio/>
        <Contacts/>
      </>
  );
}

export default App;
