import React, { useState } from 'react';
import { Route, Switch } from 'react-router';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Aboutpage from './pages/Aboutpage';
import Coursespage from './pages/Coursespage';
import Course from './components/Course';
import Paper from './components/Paper';

export default function App() {
    const [course, setCourse] = useState("");
    const [paper, setPaper] = useState("");

    return (
        <div id="app" className="app">
            <Navbar />
                <Switch>
                    <Route path="/" exact>
                        <Homepage redirect={setCourse}/>
                    </Route>
                    <Route path="/about" exact>
                        <Aboutpage />
                    </Route>
                    <Route path="/courses" exact>
                        {!course && <Coursespage />}
                        {course && <Course courseCode={course} redirect={setPaper} />}
                    </Route>
                    <Route path="/courses/paper" exact>
                        <Paper courseCode={course} paper={paper}/>
                    </Route>
                </Switch>
        </div>
    );
}
