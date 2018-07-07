import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import "./index.css";
import MERN from "./App";
import registerServiceWorker from './registerServiceWorker';
import Login from './components/Login/Login';
import Form from './components/Quiz/Form';
import Register from './components/Login/Register';

// ReactDOM.render(
//     <App />, 
//     document.getElementById("root")
// );
// registerServiceWorker();
ReactDOM.render(
    <Router>
        <div>
            <Route exact path='/person' component={MERN} />
            <Route exact path='/' component={Form} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
        </div>
    </Router>,
    document.getElementById('root')
);
registerServiceWorker();