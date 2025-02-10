import React from "react";
import './NewsLetter.css'
const NewsLetter=()=>{
    return(
    <div className="newsletter">
        
        <h1>Send Your Customized Design Details</h1>
        <div>
            <input type="email" placeholder="Your details"/>
            <button>Send</button>
        </div>
    </div>
    )
}

export default NewsLetter