import { Link } from "react-router-dom"
import "./index.scss"
import React from 'react'

const ProductsCard = ({data}) => {
  
  return (
    <div className="home__card">
      <div className="space"></div>
      <div className="card-container">
        <div className="image-container">
        <img className="image" src={data.imgPath} alt="" /><img/>
        </div>
      
        <div className="home__card-description" style={{border:"1px solid #ccc",
      alignItems:"center"}}>
            <p>{data.title}</p>
            <a href=""><button className="button">
                <Link to={`/products/${data.id}`}>Comprar Look</Link>
            </button></a>
            
        </div>
      </div>
        
    </div>
  )
}

export default ProductsCard