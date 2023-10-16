import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';
import Container from './components/layout/Container';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/contact'>Contato</Link>
          <Link to='/company'>Empresa</Link>
          <Link to='/newproject'>Novo Projeto</Link>
        </div>
        <Routes>
          <Route path='/' element={<Container><Home /></Container>} />
          <Route path='/company' element={<Container><Company /></Container>} />
          <Route path='/contact' element={<Container><Contact /></Container>} />
          <Route path='/newproject' element={<Container><NewProject /></Container>} />
        </Routes>
        <footer>Footer</footer>
      </Router>
    </div>
  );
}

export default App;
