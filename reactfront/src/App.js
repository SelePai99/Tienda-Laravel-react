// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar';
import ProductsPage from './components/ProductsPage';
import Usuario from './components/Usuario';
import Login from './components/aut/Login';
import Register from './components/aut/Register';
import { ShowProducts } from './components/pro/ShowProducts';
import { CreateProducts } from './components/pro/CreateProducts';
import { EditProducts } from './components/pro/EditProducts';
import { DeleteProducts } from './components/pro/DeleteProducts';
import './App.css';

const App = () => {
  return (
    <Router>
      <Main />
    </Router>
  );
};

const Main = () => {
  const location = useLocation();
  
  // Define the paths where NavBar should be shown
  const showNavBar = location.pathname === '/';

  return (
    <div className="App">
      {showNavBar && <NavBar />}
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/usuario" element={<Usuario />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} /> 
        <Route path='/pro' element={ <ShowProducts/> }/>
        <Route path='/create' element={ <CreateProducts/> }/>
        <Route path='/edit/:id' element={ <EditProducts/> }/>
        <Route path="/delete/:id" element={<DeleteProducts />} />
        <Route path="/CreateProducts" element={<CreateProducts />} />


      </Routes>
    </div>
  );
};

export default App;