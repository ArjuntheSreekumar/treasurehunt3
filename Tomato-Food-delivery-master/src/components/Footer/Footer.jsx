import React from 'react';
import { assets } from '../../assets/assets';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer" id="footer">
            <div className="footer-content">
                <div className="footer-content-left">
         <img src={assets.logo} alt="" className='log2'/>
               
                </div>
                <div className="footer-content-right">
               
                </div>
                <div className="footer-content-center">
<h2>GET IN TOUCH</h2>
<ul>
    <li>+919947346852</li>
    <li>arjunsreekumar101@gmail.com</li>
</ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">Copyright 2025 © Dotslash </p>
        </div>
    </div>
  )
}

export default Footer