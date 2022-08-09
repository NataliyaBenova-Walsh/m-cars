import logo from './logo.svg';
import './App.css';

// Import Parse minified version
import Parse from 'parse/dist/parse.min.js';


const PARSE_APPLICATION_ID = '9nTwJRLz0Ksu1AR8mNWuEfQylbUeJp3ccmqLvzIM';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
const PARSE_JAVASCRIPT_KEY = 'DSR96IE9jJprksIIHFRRES8viMQvj0KprIW89ZMC';
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;

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
}

export default App;
