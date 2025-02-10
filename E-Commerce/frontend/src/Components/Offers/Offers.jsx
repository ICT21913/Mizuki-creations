import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'

const Offers =() =>{
    return(
        <div className='offers'>
            <div className= "offers-left">
                <h1>Customize Your Design Now</h1>
                <h2>Personalized Perfection, Love's True Reflection!</h2>
                <button>Samples</button>
            </div>
            <div className="offers-right">
                <img src={exclusive_image} alt=""/>
            </div>
        </div>
    )
}

export default Offers