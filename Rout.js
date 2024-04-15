import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './Home/Home'
import About from './About/About'
import Blog from './Blogs/Blog'
import Contact from './Contact/Contact'
import Shop from './Shop/Shop'
import Cart from './Cart/Cart'


const Rout = ({products, Filter, All, collect, addtocart, all, Filt, add, setAdd}) => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home products={products} Filter={Filter} All={All} collect={collect}/>}/>
        <Route path='/about' element={<About />}/>
        <Route path='/shop' element={<Shop addtocart={addtocart} Filt={Filt} all={all} products={products}/>}/>
        <Route path='/cart' element={<Cart add={add} setAdd={setAdd}/>}/>
        <Route path='/blog' element={<Blog />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
    </div>
  )
}

export default Rout