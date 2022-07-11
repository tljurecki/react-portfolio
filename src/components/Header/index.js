import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Nav from '../Nav';
import About from '../About';
import Portfolio from '../Portfolio';
import Contact from '../Contact';

function Header() {
    return(
        <HashRouter>
            <Nav />
            <div className="content">
                <Route exact path="/" render={() => (<Route to="/portfolio"/>)}/> 
                <Route path="/portfolio" component={Portfolio}/>
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
            </div>
        </HashRouter>
    )
}

export default Header;