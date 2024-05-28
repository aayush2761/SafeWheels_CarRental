import { useState } from 'react';
import '../../App.css'
import logo from './logo.svg';


function Footer(){
   return(

    <>
    
    <footer class="footer">
    <div class="container">

      <div class="footer-top">

        <div class="footer-brand">
          <a href="#" class="logo">
            <img src={logo} alt="Ridex logo"/>
          </a>

          <p className="footer-text">
            Search for cheap rental cars in Raipur and nearby cities. With a diverse fleet of 300 vehicles, SafeWheel Rental offers its
            consumers an
            attractive and fun selection.
          </p>
        </div>

        <ul className="footer-list">

          <li>
            <p className="footer-list-title">Company</p>
          </li>

          <li>
            <a href="#" className="footer-link">About us</a>
          </li>

          <li>
            <a href="#" className="footer-link">Pricing plans</a>
          </li>

          <li>
            <a href="#" className="footer-link">Our blog</a>
          </li>

          <li>
            <a href="#" className="footer-link">Contacts</a>
          </li>

        </ul>

        <ul className="footer-list">

          <li>
            <p className="footer-list-title">Support</p>
          </li>

          <li>
            <a href="#" className="footer-link">Help center</a>
          </li>

          <li>
            <a href="#" className="footer-link">Ask a question</a>
          </li>

          <li>
            <a href="#" className="footer-link">Privacy policy</a>
          </li>

          <li>
            <a href="#" className="footer-link">Terms & conditions</a>
          </li>

        </ul>

        <ul className="footer-list">

          <li>
            <p className="footer-list-title">Neighborhoods in Raipur</p>
          </li>

          <li>
            <a href="#" className="footer-link">Bhilai</a>
          </li>

          <li>
            <a href="#" className="footer-link">Durg</a>
          </li>

          <li>
            <a href="#" className="footer-link">RajnandGaon</a>
          </li>

          <li>
            <a href="#" className="footer-link">Dhamtari</a>
          </li>

          <li>
            <a href="#" className="footer-link">Bilaspur</a>
          </li>

          <li>
            <a href="#" className="footer-link">Raigarh</a>
          </li>

          <li>
            <a href="#" className="footer-link">Ambikapur</a>
          </li>

          <li>
            <a href="#" className="footer-link">Nagpur</a>
          </li>

        </ul>

      </div>

      <div className="footer-bottom">

        <ul className="social-list">

          <li>
            <a href="#" className="social-link">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>

          <li>
            <a href="#" className="social-link">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>

          <li>
            <a href="#" className="social-link">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>

          <li>
            <a href="#" className="social-link">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>

          <li>
            <a href="#" className="social-link">
              <ion-icon name="logo-skype"></ion-icon>
            </a>
          </li>

          <li>
            <a href="#" className="social-link">
              <ion-icon name="mail-outline"></ion-icon>
            </a>
          </li>

        </ul>

        <p className="copyright">
           Riya Motwani (22118081) & Aayush Gupta (22118002)
        </p>

      </div>

    </div>
  </footer>
    
    
    
    </>
   )
}

export default Footer