import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes , Route} from 'react-router-dom';
/*Pages*/
import NavBar from './components/navbar';
import HomePage from './pages/home';
import FaqPage from './pages/faqpage';
import MenuPage from './pages/MenuPage';
import AboutUsPage from './pages/aboutUspage';


function App() {
  return (
    <Router>
    <div className="App">
      <NavBar />

     <div className ="content">
<Routes>
        <Route index element ={<HomePage />} />
 
        <Route path='/menu' element={<MenuPage />} />

        <Route path="/faq" element={<FaqPage />} />

        <Route path="/about" element={<AboutUsPage />} />

        </Routes>
     </div>
    </div>

    </Router>
  );
}

export default App;
