import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'

const Header = () => {
    return (
       <div className='head'>
        <div ><h1  className="header"><span className='next'>Next</span> Commerce</h1></div>
        <div className="nav-container">
        <nav>
        <Link to="/">Home</Link>
        <Link to="/review">Order Review</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
       </nav>
        </div>
       </div>
    );
};

export default Header;