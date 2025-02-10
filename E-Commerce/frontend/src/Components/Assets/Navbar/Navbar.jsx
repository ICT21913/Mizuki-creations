import React, { useContext, useState, useRef } from 'react' 
import './Navbar.css'

import logo from 'C:/Users/HP/Desktop/E-Commerce/frontend/src/Components/Assets/logo.png';
import cart_icon from 'C:/Users/HP/Desktop/E-Commerce/frontend/src/Components/Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../../Context/ShopContext';
import nav_dropdown from '../dropdown_icon.png'


const Navbar = () => {

    const [menu,setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle = (e)=>{
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }

    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>Mizuki Creations</p>
            </div>
            <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
            <ul ref={menuRef} className="nav-menu">
                <li onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration: 'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("necklace")}}><Link style={{ textDecoration: 'none'}} to='/necklace'>Necklace</Link>{menu==="necklace"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("keyatg")}}><Link style={{ textDecoration: 'none'}} to='/keytag'>Keytag</Link>{menu==="keyatg"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("earrings")}}><Link style={{ textDecoration: 'none'}} to='/earrings'>Earrings</Link>{menu==="earrings"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    )
}

export default Navbar
