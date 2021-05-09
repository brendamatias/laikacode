import * as React from 'react'
import { FaInstagram, FaFacebookF, FaLinkedin } from 'react-icons/fa'
import './styles.scss'

import logoLaikaCode from '../../assets/images/logo.svg'

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-top-logo">
        <img src={logoLaikaCode} alt="Logo LaikaCode" />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys
        </p>
      </div>

      <div className="footer-grid">
        <div>
          <strong>About</strong>
          <ul>
            <li>About us</li>
            <li>Features</li>
            <li>News</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <strong>Company</strong>
          <ul>
            <li>Our Team</li>
            <li>Partner With Us</li>
            <li>FAQ</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <strong>Support</strong>
          <ul>
            <li>Account</li>
            <li>Support Center</li>
            <li>Feedback</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="footer-bottom">
      <div className="container">
        <span>Copyright, LaikaCode 2021, All rights reserved.</span>
        <div>
          <FaInstagram />
          <FaFacebookF />
          <FaLinkedin />
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
