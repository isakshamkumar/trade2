import React from 'react'


const Navbar = () => {
    return (
      <div className="navbar">
        <label htmlFor="togglericon" className="toggler" checked></label>
        <input type="checkbox" id="togglericon" className="toggler" />
  
        <div className="brand">
          <span className="brand-icon">⚛</span>
          <span className="brand-name">Nifty50.Live</span>
        </div>
  
        <div className="nav">
          {/* Rest of the navbar code */}
        </div>
      </div>
    );
  };
  

export default Navbar


