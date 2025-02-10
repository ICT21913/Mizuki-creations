import React from 'react'
import './Breadcrum.css'
import arrow_icon from "C:/Users/HP/Desktop/E-Commerce/frontend/src/Components/Assets/breadcrum_arrow.png"

const Breadcrum = (props) => {
    const {product} = props;
    return(
        <div className="breadcrum">
             HOME <img src={arrow_icon} alt=""/>SHOP <img src={arrow_icon} alt=""/> {product.catagory} <img src={arrow_icon} alt=""/> {product.name}
        </div>
    )
}
export default Breadcrum