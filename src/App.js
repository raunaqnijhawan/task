//import React,{Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home';
import Product from './Product';

function App()
{
  return(
    <div>
    <h1>SHOPPING SITE</h1>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/product" element={<Product/>} />
      </Routes>
    </Router>
    </div>
  )
}

export default App;
