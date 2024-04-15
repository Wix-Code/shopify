import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaTiktok, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='foote'>
      <div className="footer">
        <div className="foot">
          <Link to='/'><h1>Shopify</h1></Link>
        </div>
        <div className="foot1">
          <div className="foot10">
            <h2>Contact us</h2>
            <p>Umuosuawuru, Ezialaukwu,</p>
            <p>Aboh mbaise, L.G.A</p>
            <p>imo state.</p>
            <a href="tel:+2348126829146">Tel: 08126829146</a>
            <a href="mailto:ogbonna428alex@gmail.com">Email: ogbonna428alex@gmail.com</a>
          </div>
          <div className="foot12">
            <h2>Quick links</h2>
            <Link to='/'><h4>Home</h4></Link>
            <Link to='/shop'><h4 onClick={window.scrollTo(0,0)}>Shop</h4></Link>
            <Link to='/cart'><h4 onClick={window.scrollTo(0,0)}>Cart</h4></Link>
            <Link to='/about'><h4>About</h4></Link>
          </div>
          <div className="foot11">
            <img src="../div/badge.png" alt="" />
            <img src="../div/pay.png" alt="" />
            <div className="foot_but">
              <button><FaFacebookF /></button>
              <button><FaTwitter /></button>
              <button><FaTiktok /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer