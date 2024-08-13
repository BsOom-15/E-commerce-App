import React from 'react'
import './NewsLetter.css';
const NewsLetter = () => {
    return (
        <div className='newsLetter'>
        <h1>GET EXCLUSIVE OFFERS ON YOUR EMAIL</h1>
        <p>Subscribe to our newletter and stay ubdated</p>
        <div>
            <input 
            type="email"
            placeholder='Your Email Id'
            />
            <button>Subscribe</button>
        </div>
        </div>
    )
}

export default NewsLetter