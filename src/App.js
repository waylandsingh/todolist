import logo from './logo.svg';
import './App.css';

const myVar = prompt("say something", "Nothing");

// Test out building your own component
function WelcomeMessage () {
	return (<p>WeLcOmE! {myVar==="Nothing"?"You said nothing":"good job"}</p>
    );
}

// the App function uses JSX to build component outputs
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* welcome message added here */}
        <WelcomeMessage />
        <p>Why is everything in in the header here?</p>
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
