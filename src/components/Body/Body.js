import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './../Home/Home';
import About from './../About/About';
import Contact from './../Contact/Contact';

const Body = (props) => {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>

                <Route exact path="/about">
                    <About designersList={props.designersList} clickEvent={props.click} />
                </Route>

                <Route exact path="/contact">
                    <Contact />
                </Route>

            </Switch>
            
        </div>
    );
}

export default Body;
