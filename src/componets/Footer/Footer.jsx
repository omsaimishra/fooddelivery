import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets/frontend_assets/assets';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="Logo" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt a cupiditate ex dolorum pariatur consequatur? Corporis odit, vel natus, in officia neque architecto perferendis, accusamus possimus voluptatibus tenetur exercitationem earum?</p>
          <div className="footer-social-icons">
            <div className="footer-social-icons">
  <img src={assets.facebook_icon} className="footer-social-icon-img" alt="Facebook" />
  <img src={assets.twitter_icon} className="footer-social-icon-img" alt="Twitter" />
  <img src={assets.linkedin_icon} className="footer-social-icon-img" alt="LinkedIn" />
</div>

          </div>
        </div>

        <div className="footer-content-left-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91 7847089849</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>

      <hr />
      <p className="footer-copyright">
        © 2025 Tomato.com - All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
