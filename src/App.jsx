import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header.jsx';
import Landing from './components/Landing.jsx';
import Shop from './components/Shop.jsx';
import Contact from './components/Contact.jsx';
import About from './components/About.jsx';
import Category from './components/Category.jsx';
import ProductPage from './components/ProductPage.jsx';
import './css/App.css';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route index element={<Landing />} />
          <Route path='/' element={<Landing />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/category' element={<Category />} />
          <Route path='/category:id' element={<ProductPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
