import React from 'react'
import './Offers.css'
// import Popular from '../Popular/Popular';
import exclusive_img from '../Assets/40619f4df54a7be7a3624ff199d6af13-removebg-preview.png'

const Offers = () => {
    return (
        <div className='offers'>
            <div className="offers-left">
                <h1>Exclusive</h1>
                <h1>Offers For You</h1>
                <p style={{textTransform:"uppercase"}}>Only On Best Seller Product</p>
                <button>Check Now</button>
            </div>
            <div className="offers-right">
                <img src={exclusive_img} alt="" />
            </div>
        </div>
    )
}

export default Offers