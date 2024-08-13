import React, { useContext, useState } from 'react';
import './Navbar.css';
import Logo from '../Assets/istockphoto-579771988-612x612-removebg-preview.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
    const [menu, setMenu] = useState("Home");
    const {getTotalCartItems} = useContext(ShopContext);
    
        return (
        <>
            <div className='navbar'>
        <div className="nav-logo">
            <img src={Logo} alt="shope logo" />
            <p>Elite Market</p>
        </div>
        <div>
            <ul className="nav-menue">
                <li onClick={()=> {setMenu("Home")}}> <Link to={"/"} style={{textDecoration: "none", color:"#0e6ba8"}}>Home</Link> {menu === "Home" ? <hr /> : <> </>}</li>
                <li onClick={()=> {setMenu("Men")}}> <Link to={"/mans"}  style={{textDecoration: "none", color:"#0e6ba8"}}>Man</Link>  {menu === "Men" ? <hr /> : <> </>}</li>
                <li onClick={()=> {setMenu("Women")}}> <Link to={"/womens"}  style={{textDecoration: "none", color:"#0e6ba8"}}>Women</Link>  {menu === "Women" ? <hr /> : <> </>}</li>
                <li onClick={()=> {setMenu("Kids")}}> <Link to={"/kids"}  style={{textDecoration: "none", color:"#0e6ba8"}}>Kids</Link>  {menu === "Kids" ? <hr /> : <> </>}</li>
            </ul>
        </div>

        <div className="nav-login-cart">
            <Link to={'/login'}><button>Login</button></Link>
            <Link to={'/cart'} style={{color: "#0e6ba8"}} ><FontAwesomeIcon icon={faCartShopping} /></Link> 
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
        </div>
        <div className="line"></div>
        </>

    )
}

export default Navbar