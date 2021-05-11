import * as React from 'react'
import { FaInstagram, FaFacebookF, FaLinkedin } from 'react-icons/fa'
import './styles.scss'

import logoLaikaCode from '../../assets/images/logo-light.svg'

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
            <li>
              <a href="/#">About us</a>
            </li>
            <li>
              <a href="/#">Features</a>
            </li>
            <li>
              <a href="/#">News</a>
            </li>
            <li>
              <a href="/#">Careers</a>
            </li>
          </ul>
        </div>
        <div>
          <strong>Company</strong>
          <ul>
            <li>
              <a href="/#">Our Team</a>
            </li>
            <li>
              <a href="/#">Partner With Us</a>
            </li>
            <li>
              <a href="/#">FAQ</a>
            </li>
            <li>
              <a href="/#">Blog</a>
            </li>
          </ul>
        </div>
        <div>
          <strong>Support</strong>
          <ul>
            <li>
              <a href="/#">Account</a>
            </li>
            <li>
              <a href="/#">Support Center</a>
            </li>
            <li>
              <a href="/#">Feedback</a>
            </li>
            <li>
              <a href="/#">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="footer-bottom">
      <div className="container">
        <span>Copyright, LaikaCode 2021, All rights reserved.</span>
        <div>
          <a href="https://www.instagram.com/laikacode/" target="blank">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/laikacode" target="blank">
            <FaFacebookF />
          </a>
          <a href="https://www.linkedin.com/company/laikacode/" target="blank">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
