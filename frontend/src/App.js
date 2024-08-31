import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser, faHeart } from '@fortawesome/free-solid-svg-icons';
import './style/Navbar.css';
import Home from './pages/Home'
import Products from './pages/Products';
import About from './pages/About';
import Revisar from './pages/Revisar';
import Servicios from './pages/Servicios';
import Cart from './components/Cart';
import Favorites from './components/Favorites';
import Login from './components/Login';


function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <div className="card_nav">
            <div><h1>Shoes</h1> </div>
            <nav className='nav'>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Products">Productos</Link></li>         
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Revisar">Revisar</Link></li>
                <li><Link to="/Servicios">Servicios</Link></li>
              </ul>
            </nav>
            <nav className='nav'>
              <ul>
                <li><Link to="/favorites"> <FontAwesomeIcon icon={faHeart} /></Link></li>
                <li><Link to="/Cart"> <FontAwesomeIcon icon={faShoppingCart} /></Link></li>
                <li><Link to="/login"> <FontAwesomeIcon icon={faUser} /></Link></li>
              </ul>
            </nav>
          </div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/Products' element = {<Products/> }/>
          <Route path='/About' element= {<About/>}/>
          <Route path='/Revisar' element= {<Revisar/>}/>
          <Route path='/Servicios' element= {<Servicios/>}/>
          <Route path='/Favorites' element= {<Favorites/>}/>
          <Route path='/Cart' element= {<Cart/>}/>
          <Route path='/Login' element= {<Login/>}/>
        </Routes>
    </BrowserRouter>
    </div>
    </>
  );
}

export default App;
