import React from 'react';
import './App.css';
import CartItems from './CartItems/CartItems';
import CookieCards from './CookieCards/CookieCards';
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <CookieCards/>
      <CartItems/>
    </div>
  );
}

export default App;
