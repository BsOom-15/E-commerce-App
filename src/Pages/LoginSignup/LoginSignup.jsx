import React from 'react';
import './LoginSignup.css';
const LoginSignup = () => {
    return (
        <div className='login-signup'>
        <div className="loginsignup-container">
            <h1>Sign Up</h1>
            <div className="loginsignup-fileds">
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder='Your Email Address' />
                <input type="password" placeholder="Your Password" />
            </div>
            <button className='btn'>Continue</button>
            <p className="loginsignup-login">
                Already have an account? <span>Login Here</span>
            </p>
            <div className="loginsignup-agree">
                <input type="checkbox" name='' id='' />
                <p>By continuing, I agree to the <span>Terms of Use</span> and <span>Privacy Policy</span></p>
            </div>
        </div>
        </div>
    )
}

export default LoginSignup