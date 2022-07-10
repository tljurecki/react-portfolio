import React from 'react';
import { BrowswerRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Nav from '../Nav';
import About from '../About';
import Portfolio from '../Portfolio';
import Contact from '../Contact';

function Header() {
    return(
        <Router>
            <Nav />
            <Switch>
                <Route exact path="/">
                    <Redirect to="/about"/>
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/contact" component={Contact} />
            </Switch>
        </Router>
    )
}

export default Header;