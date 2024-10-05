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
            <div className='textShoes'>
            Shoe<span className='blueUnderline'>s</span>
            </div>
            <nav className='nav'>
              <ul>
                <li ><Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Home</Link></li>
                <li ><Link to="/Products" style={{ textDecoration: 'none', color: 'black' }}>Productos</Link></li>         
                <li><Link to="/About" style={{ textDecoration: 'none', color: 'black' }}>About</Link></li>
                <li><Link to="/Revisar" style={{ textDecoration: 'none', color: 'black' }}>Revisar</Link></li>
                <li><Link to="/Servicios" style={{ textDecoration: 'none', color: 'black' }}>Servicios</Link></li>
              </ul>
            </nav>
            <nav className='nav'>
              <ul className='nav-icons'>
                <li><Link to="/favorites" style={{ textDecoration: 'none', color: 'black', fontSize: '18px'}}> <FontAwesomeIcon icon={faHeart} /></Link></li>
                <li><Link to="/Cart" style={{ textDecoration: 'none', color: 'black', fontSize: '18px' }}> <FontAwesomeIcon icon={faShoppingCart} /></Link></li>
                <li><Link to="/login" style={{ textDecoration: 'none', color: 'black', fontSize: '18px'}}> <FontAwesomeIcon icon={faUser} /></Link></li>
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
