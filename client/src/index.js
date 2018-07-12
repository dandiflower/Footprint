import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import "./index.css";
import MERN from "./App";
import registerServiceWorker from './registerServiceWorker';
import Login from './components/Login/Login';
import QuestionForm from './components/Quiz/QuestionForm';
import Register from './components/Login/Register';
import Results from './components/Results/Results';

// import testRadio from './components/Radiobutton/testRadio';
// ReactDOM.render(
//     <App />, 
//     document.getElementById("root")
// );
// registerServiceWorker();
ReactDOM.render(

    <Router>
        <div>
            <Route exact path='/person' component={MERN} />
            <Route exact path='/' component={QuestionForm} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/results' component={Results} />
        </div>
    </Router>,
    document.getElementById('root')
);
registerServiceWorker();