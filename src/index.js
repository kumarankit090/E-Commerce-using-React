import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={ <App />} />
    {/* <Route path="home" element={ <Home />} /> */}
    <Route path="register" element={ <Register />} />
    <Route path="login" element={ <Login />} />
    <Route path="cart" element={ <Cart />} />
    <Route path="productpage" element={ <ProductPage />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);