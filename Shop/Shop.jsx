import React, { useState } from 'react'
import './Shop.css'
import {Link} from 'react-router-dom'
import {FaArrowRight, FaStar, FaTimes} from 'react-icons/fa'
import Product from '../Product'

const Shop = ({addtocart,products,all,Filt}) => {



const [loadmore, setLoadmore]=useState(false)
const [view,setView]= useState(false)
const [index,setIndex]= useState(0)

const details = (i) => {
  setIndex(i)
  setView(true)
}

  return (
    <div className='shop'>
       { view ?
          <div className="view_div">
            <button className='x' onClick={()=>setView(false)}><FaTimes /></button>
            <div className="view-div-img">
              <img className='img11' src={products[index].image1} alt="" />
              <img className='img22' src={products[index].image2} alt="" />
            </div>          
            <div className="view_div_p">
              <h4>{products[index].name}</h4>
              <h3>{products[index].desc}</h3>
              <p>${products[index].price}</p>
              <div className="btn3">
                <button><FaStar /></button>
                <button><FaStar /></button>
                <button><FaStar /></button>
                <button><FaStar /></button>
                <button><FaStar /></button>
              </div>
              <button className='button1'>ADD TO CART</button>
            </div>
          </div> :
          null
        }
      <div className="shop1">
        <h1>SHOP</h1>
      </div>
      <div className="shoppy">
        <div className="shoppy1">
          <div className="shop_home">
            <Link to="/"><p>Home</p></Link>
            <p><FaArrowRight className='arrow'/></p>
            <p className='red'>Shop</p>
          </div>
          <div className="shop_cat">
            <h4 onClick={all}>ALL Products</h4>
            <h4 onClick={() => Filt ("Phone")}>phones</h4>
            <h4 onClick={() => Filt ("Headphone")}>headphones</h4>
            <h4 onClick={() => Filt ("Earpod")}>earpods</h4>
            <h4 onClick={() => Filt ("Laptop")}>laptop</h4>
            <h4 onClick={() => Filt ("Watch")}>watches</h4>
          </div>
          <div className="shop3_div">
            <img src="../div/1.jpg" alt="" />
          </div>
          <div className="shop3_div">
            <img src="../div/2.jpg" alt="" />
          </div>
          <div className="shop3_div">
            <img src="../div/8.jpg" alt="" />
          </div>
          <div className="shop3_div">
            <img src="../div/5.jpg" alt="" />
          </div>
          <div className="shop3_div">
            <img src="../div/7.jpg" alt="" />
          </div>
          <div className="shop3_div">
            <img src="../div/2.jpg" alt="" />
          </div>
        </div>
        <div className="shoppy2">
          <div className="shopy_product">
            <h3>products</h3>
          </div>
          <div className="map_products">
            {
              products.map((prodot, i) => {
                return(
                  <div className="prod" key={i}>
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
                    <button onClick={()=>addtocart(prodot)} className='button'>ADD TO CART</button>
                    <span onClick={()=>details(i)}>View</span>
                  </div>
                )
              })
            }
          </div>
          { loadmore && <>
            <div className="map_products">
            {
              products.map((prodot, i) => {
                return(
                  <div className="prod" key={i}>
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
                    <button onClick={()=>addtocart(prodot)} className='button'>ADD TO CART</button>
                    <span onClick={()=>details(i)}>View</span>
                  </div>
                )
              })
            }
          </div>
          </>
          }
          <div className="shoppy_btn">
            <button onClick={() => setLoadmore(!loadmore)}>{loadmore ? "Load less" : "Load more"}</button>
          </div>
        </div>
        <div className="shoppy3">
          <div className="shoppy3_div">
            <img src="../face/17.jpg" alt="" />
          </div>
          <div className="shoppy3_div">
            <img src="../face/17.jpg" alt="" />
          </div>
          <div className="shoppy3_div">
            <img src="../face/2.jpg" alt="" />
          </div>
          <div className="shop3_div">
            <img src="../div/1.jpg" alt="" />
          </div>
          <div className="shop3_div">
            <img src="../div/2.jpg" alt="" />
          </div>
          <div className="shop3_div">
            <img src="../div/14.jpg" alt="" />
          </div>
          <div className="shop3_div">
            <img src="../div/2.jpg" alt="" />
          </div>
          <div className="shop3_div">
            <img src="../div/13.jpg" alt="" />
          </div>
          <div className="shop3_div">
            <img src="../div/10.jpg" alt="" />
          </div>
          <div className="shop3_div">
            <img src="../div/15.jpg" alt="" />
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Shop