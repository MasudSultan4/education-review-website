import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <div>
            <div className="MenuBar-container">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="logo-img">
              <h4 className="text-white mt-3">E-Programming</h4>
            </div>
          </div>
          <div className="col-md-8">
            <div className="menu-container mt-2">
              <ul className="d-flex align-items-end justify-content-end">
              <Link className="items" to="/home">Home</Link>
              <Link className="items" to="/courses">Courses</Link>
              <Link className="items" to="/about">About</Link> 
              <Link className="items" to="/contact">Contact</Link> 
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    
        </div>
    );
};

export default Header;