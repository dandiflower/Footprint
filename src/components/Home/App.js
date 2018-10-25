import React, { Component } from 'react';
import '../Home/App.css';
import Series from '../../containers/Series';
import 'whatwg-fetch';

class App extends Component {
 
  render() {
    return (
      <div className="App">
        <header className="App-header">
  
        <Series />
        
        <button id="bt-popup" class="my-button">Popup</button>
        </header>

          {/* START OF TYPEFORM SURVEY */}
          {/* <html> 
            <body> 
              <iframe id="typeform-full" width="100%" height="100%" frameborder="0" src="https://hannahlim1.typeform.com/to/LwxSXf">
              </iframe> 
              <script type="text/javascript" src="https://embed.typeform.com/embed.js"></script> 
            </body> 
          </html> */}
          {/* END OF TYPEFORM SURVEY */}

      </div>
    );
  }
}

export default App;
