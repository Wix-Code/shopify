import React, {useEffect, useState} from 'react'
import Navbar from './Navbar/Navbar'
import './App.css'
import Rout from './Rout'
import Footer from './Footer/Footer'
import Product from './Product'

const App = () => {
  const [products,setProducts] = useState(Product)
  const [add, setAdd]=useState([])

  const addtocart = (product) => {
    const exist = add.find((prodot) =>{
      return prodot.id === product.id
    })
    if(exist){
    alert("Already Added")
  }
  else{
    alert('Added')
    setAdd([...add,{...product,qty:1}])
  }
}

  
  const Filter = (x) => {
    const console = Product.filter((prodot) => {
      return prodot.cat === x
    })

    setProducts(console)
  }

  const All = () => {
    setProducts(Product)
  }

  
  const Filt = (product) => {
    const filter = Product.filter((x) => {
      return x.name === product
    })

    setProducts(filter)
  }

  const all = () => {
    setProducts(Product)
  }
  return (
    <div>
      <Navbar add={add} />
      <Rout products={products} Filter={Filter} All={All} addtocart={addtocart} add={add} Filt={Filt} all={all} setAdd={setAdd}/>
      <Footer />
    </div>
  )
}

export default App