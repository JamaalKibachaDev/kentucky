import React from 'react';
import './App.css';

import Faq from './components/faq';
import MenuMain from './components/menu';
import MenuCards from './components/HomeMenu';

/*Pages*/
import HomePage from './pages/home';
import FaqPage from './pages/faqpage';
import MenuPage from './pages/MenuPage';

function App() {
  return (
    <div className="App">
     <div>
      <MenuPage/>
     </div>
    </div>
  );
}

export default App;
