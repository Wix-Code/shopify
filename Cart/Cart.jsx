import React from 'react'
import './Cart.css'
import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'

const Cart = ({add, setAdd}) => {
  const Increase = (product) => {
    const exist = add.find((prodot) => {
      return prodot.id === product.id
    })
    setAdd(add.map((prodot) => {
      return prodot.id === product.id ? ({...exist,qty : exist.qty + 1}) : prodot
    }))
  }

  const Decrease = (product) => {
    const exist = add.find((prodot) => {
      return prodot.id === product.id
    })
    setAdd(add.map((prodot) => {
      return prodot.id === product.id ? ({...exist,qty : exist.qty - 1}) : prodot
    }))
  }

  const Remove = (product) => {
    const exist = add.find((prodot) => {
      return prodot.id === product.id
    })
    if(exist.qty > 0) {
    setAdd(add.filter((prodot) => {
      return prodot.id !== product.id }))
   }
  }

  const total = add.reduce((price,item) => {
    return price + item.qty * item.price 
  },0)
  return (
    <div className='maincart'>
      <div className="cart">
        {
          add.length === 0 ? <>
          <div className="cart1">
            <h1>Cart is Empty</h1>
            <Link to='/shop'><button>SHOP NOW</button></Link>
          </div>
          </>
          :
            <div className="cart2">
              {
                add.map((prodot)=>{
                  return(
                      <div className="cart_div">
                        <div className="cart-img">
                          <img src={prodot.image1} alt="" />
                        </div>
                        <div className="cart_details">
                          <h3>{prodot.name}</h3>
                          <h2>{prodot.desc}</h2>
                          <h4>${prodot.price}</h4>
                          <h4 className='h-4'>${prodot.price * prodot.qty}</h4>
                        </div>
                        <div className="right_cart">
                          <button disabled={prodot.qty === 0} onClick={()=>Decrease(prodot)}>-</button>
                          <p>{prodot.qty}</p>
                          <button  onClick={()=>Increase(prodot)}>+</button>
                          <div className="btn4" onClick={()=>Remove(prodot)}><FaTimes /></div>
                        </div>
                      </div>                  
                  )
                })
              }
            </div>
        }
        { add.length > 0 &&
          <div className="cart_sub">
            <h1>total: <span>${total}</span></h1>
          </div>
        }
      </div>
    </div>
  )
}

export default Cart