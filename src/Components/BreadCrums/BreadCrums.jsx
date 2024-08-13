import React from 'react';
import './BreadCrums.css'
import breadcrum_arrow from '../Assets/breadcrum_arrow.png'


const BreadCrums = (props) => {
    const {product} = props;
    return (
        <div className='breadcrums'>
            HOME <img src={breadcrum_arrow} alt="Arrow" /> SHOP <img src={breadcrum_arrow} alt="Arrow" />{product.category}<img src={breadcrum_arrow} alt="Arrow" /> {product.name}
        </div>
    );
}

export default BreadCrums;