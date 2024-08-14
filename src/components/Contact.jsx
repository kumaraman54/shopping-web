import React from 'react'
import './css/contact.css'
import { FaComments, FaPhone, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact-container">
    <h2>Contact Us</h2>
    
    <div className="contact-grid">
      <div className="contact-section">
        <h3>Contact Details</h3>
        <p>Email: contact@yourwebsite.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>Address: 123 Your Street, Your City, Your Country</p>
      </div>

      <div className="contact-section">
        <h3>Orders & Payment</h3>
        <p>
          Find information about your orders and payment options, including tracking orders, payment methods, and more.
        </p>
      </div>

      <div className="contact-section">
        <h3>Return Policy</h3>
        <p>
          Our return policy allows you to return products within 30 days of purchase. The product must be in its original condition, and you must provide proof of purchase. Refunds will be processed within 5-7 business days after the product is received.
        </p>
      </div>

      <div className="contact-section">
        <h3>Dispatch Policy</h3>
        <p>
          Orders are typically dispatched within 1-2 business days after payment is received. Delivery times vary depending on your location, but most orders arrive within 5-10 business days.
        </p>
      </div>

      <div className="contact-section">
        <h3>Shopping Company Info</h3>
        <p>
          Learn more about our company, including our history, mission, and values. We're committed to providing the best shopping experience.
        </p>
      </div>

      <div className="contact-section">
        <h3>Nike Membership</h3>
        <p>
          Join the Nike Membership program to enjoy exclusive benefits, including early access to new products, special discounts, and more.
        </p>
      </div>
    </div>

    {/* Footer Section */}
    <div className="footer-separator"></div>
    <div className="contact-footer">
      <div className="footer-item">
        <FaComments className="footer-icon" />
        <h4>Chat with Us</h4>
      </div>
      <div className="footer-item">
        <FaPhone className="footer-icon" />
        <h4>Call Us</h4>
        <p>(123) 456-7890</p>
      </div>
      <div className="footer-item">
        <FaClock className="footer-icon" />
        <h4>We Will Reply Within</h4>
        <p>24 hours</p>
      </div>
      <div className="footer-item">
        <FaMapMarkerAlt className="footer-icon" />
        <h4>Find a Store</h4>
      </div>
    </div>
  </div>  
  )
}

export default Contact