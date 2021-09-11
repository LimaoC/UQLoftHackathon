import React from 'react';
import { Route, Switch } from 'react-router';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Aboutpage from './pages/Aboutpage';
import Coursespage from './pages/Coursespage';

export default function App() {
    return (
        <div id="app" className="app">
            <Navbar />
                <Switch>
                    <Route path="/" exact>
                        <Homepage />
                    </Route>
                    <Route path="/about" exact>
                        <Aboutpage />
                    </Route>
                    <Route path="/courses" exact>
                        <Coursespage />
                    </Route>
                </Switch>
        </div>
    );
}