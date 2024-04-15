import React from 'react'
import "./home.css"
import { Link } from 'react-router-dom'

const Banner2 = () => {
  return (
    <div className='badge'>
      <div className="badge2">
        <div className="badge3">
          <h1>Get latest gadgets here</h1>
          <h2>we update our store everyday</h2>
          <Link to='/shop' onClick={window.scrollTo(0,0)}><p>GET LATEST</p></Link>
        </div>
        <div className="badge4">
          <img src="../div/18.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Banner2