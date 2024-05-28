import { useState } from 'react';
import '../../App.css'
import car1 from '../assets/landingimg/car-1.jpg';
import car2 from '../assets/landingimg/car-2.jpg';
import car3 from '../assets/landingimg/car-3.jpg';
import car4 from '../assets/landingimg/car-4.jpg';
import car5 from '../assets/landingimg/car-5.jpg';
import car6 from '../assets/landingimg/car-6.jpg';
import person1 from '../assets/landingimg/person-1.jpg';
import person2 from '../assets/landingimg/person-2.jpg';
import person3 from '../assets/landingimg/person-3.jpg';
import person4 from '../assets/landingimg/person-4.jpg';
import person5 from '../assets/landingimg/person-5.jpg';
import hero from '../assets/landingimg/bg_home.jpg';
import logo from './logo.svg';
import { Link } from 'react-router-dom';

function Header(){
    return (

        <>
    
        <header className="header" data-header>
                <div className="container">
                    <div className="overlay" data-overlay></div>
                    <a href="/" className="logo">
                        <img src={logo} alt="SafeWheel logo" />
                    </a>
                    <nav className="navbar" data-navbar>
                        <ul className="navbar-list">
                            <li>
                                <a href="/" className="navbar-link" data-nav-link>
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#featured-car" className="navbar-link" data-nav-link>
                                    Explore cars
                                </a>
                            </li>
                            <li>
                                <a href="/about" className="navbar-link" data-nav-link>
                                    About us
                                </a>
                            </li>
                            <li>
                                <a href="/review" className="navbar-link" data-nav-link>
                                    Reviews
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className="header-actions">
                        <div className="header-contact">
                            <a href="tel:+91 8889804108" className="contact-link">
                                +91 6265388898
                            </a>
                            <span className="contact-time">Mon - Sat: 9:00 am - 6:00 pm</span>
                        </div>
                        <a href="#featured-car" className="btn" aria-labelledby="aria-label-txt">
                            <ion-icon name="car-outline"></ion-icon>
                            <span id="aria-label-txt">Explore cars</span>
                        </a>
                        <a href="/signup" className="btn user-btn" aria-label="Profile">
                            <ion-icon name="person-outline"></ion-icon>
                        </a>
                        <button className="nav-toggle-btn" data-nav-toggle-btn aria-label="Toggle Menu">
                            <span className="one"></span>
                            <span className="two"></span>
                            <span className="three"></span>
                        </button>
                    </div>
                </div>
            </header>
    
        
        
        
        </>
    )

}

export default Header