import './ProductDisplay.css'
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from '../../Context/ShopContext';
import React, { useContext } from 'react';


const ProductDisplay = (props) => {
    const {product} = props;
    const{addToCart} = useContext(ShopContext);
    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={product.image} alt="" />
                </div>

            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-new">Rs.{product.new_price}</div>
                </div>
                <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
                <p className="productdisplay-right-catagory"><span>Category :</span>Necklace, Dry Flower, Circle</p>
                <p className="productdisplay-right-catagory"><span>Tags :</span>Dry Flower, Latest</p>
            </div>
        </div>
    )
}

export default ProductDisplay