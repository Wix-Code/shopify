import React from 'react'
import Top from './Top'
import Banner from './Banner'
import Products from './Products'
import Banner2 from './Banner2'
import Collections from './Collections'

const Home = ({products, Filter, All, collect}) => {
  return (
    <div>
      <Top />
      <Banner />
      <Products products={products} Filter={Filter} All={All}/>
      <Banner2 />
      <Collections collect={collect}/>
    </div>
  )
}

export default Home