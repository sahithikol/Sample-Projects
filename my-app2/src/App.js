import logo from './logo.svg';
import './App.css';
import ChatComponent from './ChatComponent';
import { Accordion } from './Components/Accordion';
import { Wizard } from './Components/Wizard';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      {/* <ChatComponent/>
      <Accordion/> */}
      <Wizard/>
    </div>
  );
}

export default App;
