import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>

          {/* START OF TYPEFORM SURVEY */}
          <html> 
            <body> 
              <iframe id="typeform-full" width="100%" height="100%" frameborder="0" src="https://hannahlim1.typeform.com/to/LwxSXf">
              </iframe> 
              <script type="text/javascript" src="https://embed.typeform.com/embed.js"></script> 
            </body> 
          </html>
          {/* END OF TYPEFORM SURVEY */}
          
        </header>
      </div>
    );
  }
}

export default App;
