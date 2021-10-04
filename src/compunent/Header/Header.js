import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';
const Header = () => {
    return (
        <div>
            <div className="MenuBar-container">
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <div className="logo-img">
              <img className="w-75" src={logo} alt="" />
            </div>
          </div>
          <div className="col-md-10 p-1">
            <div className="menu-container ">
              <ul className="d-flex align-items-end justify-content-end">
              <Link className="items" to="/home">Home</Link>
              <Link className="items" to="/searvis">Service</Link>
              <Link className="items" to="/about">About</Link> 
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