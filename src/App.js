import React from 'react';
import { Route, Switch } from 'react-router';
import styled from 'styled-components';

export default function App() {
    return (
        <div id="app" className="app">
            <Switch>
                <Route path="/" exact>
                </Route>
            </Switch>
        </div>
    )
}