import React,{useState, useEffect} from 'react'
import './home.css'
import Product from '../Product'
import { FaStar } from 'react-icons/fa'

const Collections = () => {
  const [collect, setCollect] = useState(Product)
  const [latest, setLatest] = useState(Product)
  const [most, setMost] = useState(Product)

  useEffect (() => {
    newcollect()
    latestcollect()
    mostcollect()
  })

  const newcollect = () => {
    const New = Product.filter((x) => {
      return x.feature === "news"
    })

    setCollect(New)
  }

  const latestcollect = () => {
    const New = Product.filter((x) => {
      return x.feature === "latest"
    })

    setLatest(New)
  }

  const mostcollect = () => {
    const New = Product.filter((x) => {
      return x.feature === "most"
    })

    setMost(New)
  }



  return (
    <div className='collection'>
      <div className="collect">
        <div className="collect1">
          <div className="flex-h1">
            <h3>New Products</h3>
          </div>
          <div className="divide">
            { 
              collect.map((x) => {
                return (
                  <div className="new">
                    <div className="news">
                      <img src={x.image1} alt="" />
                    </div>
                    <div className="new1">
                      <h4>{x.desc}</h4>
                      <p>{x.name}</p>
                      <div className="btn3">
                        <button><FaStar /></button>
                        <button><FaStar /></button>
                        <button><FaStar /></button>
                        <button><FaStar /></button>
                        <button><FaStar /></button>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="collect2">
        <div className="flex-h1">
            <h3>Most Featured</h3>
          </div>
          <div className="divide">
            { 
              latest.map((x) => {
                return (
                  <div className="new">
                    <div className="news">
                      <img src={x.image1} alt="" />
                    </div>
                    <div className="new1">
                      <h4>{x.desc}</h4>
                      <p>{x.name}</p>
                      <div className="btn3">
                        <button><FaStar /></button>
                        <button><FaStar /></button>
                        <button><FaStar /></button>
                        <button><FaStar /></button>
                        <button><FaStar /></button>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="collect3">
          <div className="flex-h1">
            <h3>Latest Product</h3>
          </div>
          <div className="divide">
            { 
              most.map((x) => {
                return (
                  <div className="new">
                    <div className="news">
                      <img src={x.image1} alt="" />
                    </div>
                    <div className="new1">
                      <h4>{x.desc}</h4>
                      <p>{x.name}</p>
                      <div className="btn3">
                        <button><FaStar /></button>
                        <button><FaStar /></button>
                        <button><FaStar /></button>
                        <button><FaStar /></button>
                        <button><FaStar /></button>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Collections