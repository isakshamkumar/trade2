import React from 'react'

const Footer = () => {
    return (
      <footer>
        <div className="footer">
          <div className="row">
            {/* Social media icons */}
            <a href="#"><i className="fa fa-facebook"></i></a>
            <a href="#"><i className="fa fa-instagram"></i></a>
            <a href="#"><i className="fa fa-youtube"></i></a>
            <a href="#"><i className="fa fa-twitter"></i></a>
          </div>
  
          <div className="row">
            <ul>
              {/* List of links */}
              <li><a href="#">Contact us</a></li>
              <li><a href="#">Our Services</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Career</a></li>
            </ul>
          </div>
  
          <div className="row">
            <p>Copyright © 2021 Nifty50.live. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };

export default Footer
