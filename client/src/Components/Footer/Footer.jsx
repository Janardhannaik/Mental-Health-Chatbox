import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-line">
      <div className="footer">
        <h1>Contact Us</h1>
        <div className="container">
          <div className="name">
            <p>Heapy Bot</p>
          </div>
          <div className="contact">
            <p>+91 12345678910</p>
          </div>
          <div className="email">
            <p>heapy@gmail.com</p>
          </div>
        </div>
      </div>
      <hr />
      <p className="copyright">Copyright © heapy Bot</p>
    </div>
  );
}

export default Footer;
