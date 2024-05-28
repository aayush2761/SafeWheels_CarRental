import React from 'react';
import './aboutStyle.css';
import carImage from '../assets/landingimg/car-1.jpg'; 

function AboutPage() {
  return (
    <>
      <div className="about-page">
        <h2>About Us</h2>
        <img src={carImage} alt="Car Rental" className="car-image" />
        <p>Welcome to our car rental service! We are dedicated to providing convenient and reliable transportation solutions to customers in Chattisgarh and nearby areas.</p>
        <p>With a fleet of well-maintained vehicles and a commitment to exceptional customer service, we strive to make your travel experience smooth and enjoyable.</p>
        <h3>Our Mission</h3>
        <p>Our mission is to offer affordable and flexible car rental options while maintaining the highest standards of safety, comfort, and convenience for our customers.</p>
        <h3>Why Choose Us?</h3>
        <ul>
          <li>Wide range of vehicles to suit your needs</li>
          <li>Easy booking process</li>
          <li>Competitive prices</li>
          <li>Flexible rental durations</li>
          <li>24/7 customer support</li>
        </ul>
        <h3>Contact Us</h3>
        <p>If you have any questions or inquiries, please don't hesitate to contact us:</p>
        <p>Email: info@saferentalchattisgarh.com</p>
        <p>Phone: +91-6265388898</p>
      </div>
    </>
  )
}

export default AboutPage;
