import React from 'react';
import { Route, Switch } from 'react-router';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';

export default function App() {
    return (
        <div id="app" className="app">
            <Navbar />
                <Switch>
                    <Route path="/" exact>
                        <Homepage />
                    </Route>
                </Switch>
        </div>
    );
}