import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';
import Projects from './components/pages/Projects';

import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar'; // Certifique-se de que o caminho está correto
import Footer from './components/layout/Footer'; // Certifique-se de que o caminho está correto

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
          <Routes>
            <Route path='/' element={<Container><Home /></Container>} />
            <Route path='/projects' element={<Container><Projects /></Container>} />
            <Route path='/company' element={<Container><Company /></Container>} />
            <Route path='/contact' element={<Container><Contact /></Container>} />
            <Route path='/newproject' element={<Container><NewProject /></Container>} />
          </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
