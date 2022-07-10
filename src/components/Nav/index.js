import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
    return(
        <div className="nav">
            <div className="nav-left">
                <NavLink
                activeClassName="nav_link--active"
                className="nav_link"
                to="/about">
                    ABOUT
                </NavLink>
            </div> 
            <div className='nav-right'>
                <NavLink 
                activeClassName="nav_link--active"
                className="nav_link"
                to="/portforlio">
                    PORTFOLIO
                </NavLink>
                <NavLink 
                activeClassName="nav_link--active"
                className="nav_link"
                to="/contact">
                    CONTACT
                </NavLink>
            </div>
        </div>
    )
}

export default Nav;