import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div className="description-nav-box">
                    Description
                </div>
                <div className="description-nav-box fade">
                    Reviews (122)
                </div>
            </div>
            <div className="descriptionbox-description">
                <p>Our t-shirt features a flattering, tailored fit that accentuates your natural shape without being too tight. The fitted design hugs your curves in all the right places, providing a sleek silhouette that complements any body type. With its classic crew neckline, this t-shirt offers a timeless look that never goes out of style.</p>
            </div>
        </div>
    )
}

export default DescriptionBox