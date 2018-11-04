import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/Home/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import Background from '../src/components/Background/background';

// .render takes 3 arguments (react element that we want to render, dom container, optional- callback, logic)
ReactDOM.render(
    <BrowserRouter> 
        <div>
            <App />
            <Background />
        </div>
    </ BrowserRouter>, 
    document.getElementById('root')

);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
