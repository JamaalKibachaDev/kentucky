import React from 'react';
import './App.css';

import { BrowserRouter, Router, Routes, Route, NavLink } from 'react-router-dom';
/*Pages*/
import HomePage from './pages/home';
import FaqPage from './pages/faqpage';
import MenuPage from './pages/MenuPage';
import AboutUsPage from './pages/aboutUspage';

function App() {
  return (
    <div className="App">
     <div>
      < HomePage/>
     </div>
    </div>
  );
}

export default App;
