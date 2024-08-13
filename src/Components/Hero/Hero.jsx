import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/wave.png'
import arrow_icon from '../Assets/right-arrow.png'
import hero_img from '../Assets/629280a160fe4df0cbb5e37e2c6745d7-removebg-preview.png'
const Hero = () => {
    return (
        <div className='hero'>
        <div className="hero-left">
                <h2>NEW ARRIVES ONLY</h2>
            <div>
                <div className="hero-hand-icons">
                    <p>new</p>
                    <img src={hand_icon} alt="" />
                </div>
                <p>collections</p>
                <p>for everyone</p>
            </div>
            <div className="hero-lastes-btn">
                <div>Lastes Collection</div>
                <img src={arrow_icon} alt="" />
            </div>
        </div>

        <div className="hero-right">
        <div className='hero-background'>
            <img src={hero_img} alt="" />
        </div>
        </div>
        </div>
    )
}

export default Hero