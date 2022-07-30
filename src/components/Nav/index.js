import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Nav() {
    return(
        <nav className="navbar">
            <div className="nav-left">
              <a href="#about" className="mr-5">About</a>
              <br></br>
              <a href="#portfolio" className="mr-5">Portfolio</a>
              <br></br>
              <a href="#contact" className="mr-5">Contact</a>  
            </div>
        </nav>
    )
}

export default Nav;