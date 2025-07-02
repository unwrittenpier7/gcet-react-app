import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about-container">
      <h2 className="about-title">About Us</h2>
      <div className="about-content">
        <p className="about-text">
          My Online Shop is dedicated to providing high-quality products at affordable prices. Our mission is to make online shopping easy, convenient, and enjoyable for everyone.
        </p>
        <p className="about-text">
          Founded in 2005, we have grown to become a trusted name in e-commerce, offering a wide range of products from electronics to fashion. Our team is passionate about customer satisfaction and strives to deliver the best shopping experience.
        </p>
        <p className="about-text">
          Contact us at <a href="mailto:support@myonlineshop.com" className="about-link">support@myonlineshop.com</a> for any inquiries.
        </p>
      </div>
    </div>
  );
}