import React from 'react';
import './Footer.css';
import footer_logo from '../Assets/istockphoto-579771988-612x612-removebg-preview.png';
import instagram_icon from '../Assets/instagram.png';
import pintester_icon from '../Assets/pinterest.png';
import whatsapp_icon from '../Assets/whatsapp.png';


const Footer = () => {
    return (
        <div className='footer'>
        <div className="footer-logo">
        <div>
            <img style={{width:"150px"}}  src={footer_logo} alt="" />
            <p>Elite Market</p>
        </div>
            <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
            </ul>
            <div className="footer-social-icons">
                <div className="footer-icons-container">
                    <img src={instagram_icon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={whatsapp_icon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={pintester_icon} alt="" />
                </div>
            </div>
            <div className="footer-copyrigtht">
            <hr />
                <p>© 2024 All Rights Reserved</p>
            </div>
        </div>
        </div>
    )
}

export default Footer