import React ,{ Component } from 'react';
import Hello from './Hello';

/*
function App() {
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
      </header>
    </div>
  );
}*/

class App extends Component {
    render() {
      const user=123;

      return (
    
        <div className="container">
          <div className="row">
            <div className="col-xs-1 col-xs-offset-11">
              <h1>Hello</h1>
            </div>
            <div>
              <Hello age='111'  name='BeautifulGirl' user={user}/> This is hello Component
            </div>
            <div>
              {true? "good" : "Bad"}
            </div>
          </div>  
        </div>
      );
    }
}



export default App;
