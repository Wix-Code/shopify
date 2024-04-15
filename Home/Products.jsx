import React, { useState } from 'react'
import './home.css'
import Product from '../Product'
import {FaStar} from 'react-icons/fa'

const Products = ({products, Filter,All}) => {
  return (
    <div className='product'>   
      <div className="products">
        <div className="left">
          <h3>Products</h3>
        </div>       
        <div className="right">
          <p onClick={() => Filter("new")}>new</p>
          <p onClick={() => Filter ("sale")}>on sale</p>
          <p onClick={All}>all</p>
        </div>
      </div>
      <div className="product1">
        {
          products.map((prodot) => {
            return (
              <div className="prod">
                <div className="image">
                  <img className='img1' src={prodot.image1} alt="" />
                  <img className='img2' src={prodot.image2} alt="" />
                </div>
                <h3>{prodot.desc}</h3>
                <h4>{prodot.name}</h4>
                <div className="star">
                  <p>${prodot.price}</p>
                  <div className="fastars">
                    <button><FaStar className='sta' /></button>
                    <button><FaStar  className='sta' /></button>
                    <button><FaStar  className='sta'/></button>
                    <button><FaStar className='staa'  /></button>
                    <button><FaStar  className='staa'/></button>
                  </div>
                </div>
                
              </div>
            )
            })
        }
      </div>
    </div>
  )
}

export default Products