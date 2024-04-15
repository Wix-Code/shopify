import React, { useState } from 'react'
import './navbar.css'
import {FaBars, FaShoppingCart, FaTimes, FaUser} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = ({add}) => {

  const [open, setOpen] = useState(false)
  return (
    <div className='navbar'>
      <div className="navbar1">
        <div className="navbar_1">
          <p>24/7 online store</p>
          <a href="tel:+2348126829146">Call: 08126829146</a>
        </div>
      </div>
      <div className="navbar2">
        <div className="navbar_2">
          <div className="nav_left">
            <Link to='/'><h1>Shopify</h1></Link>
          </div>
          <div className={ open ? "nav_open" : "navcen"}>
            <ul>
              <Link to="/"><li onClick={()=>setOpen(false)}>home</li></Link>
              <Link to="/shop"><li onClick={()=>setOpen(false)}>shop</li></Link>
              <Link to="/blog"><li onClick={()=>setOpen(false)}>blog</li></Link>
              <Link to="/about"><li onClick={()=>setOpen(false)}>about</li></Link>
            </ul>
          </div>
          <div className="navright">
            <div className="shop_it">
              <Link to='/cart'><button><FaShoppingCart /></button></Link>
              <span>{add.length}</span>
            </div>
            <button><FaUser /></button>
            <button onClick={() => setOpen(!open)} className='bars'>{ open ? <FaTimes className='timesbar' /> : <FaBars />}</button>
          </div>
        </div>
      </div>
      <div className="navbar3">
        <div className="search">
          <div className="inp">
            <input type="text" placeholder='Search' />
            <button>Search</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar