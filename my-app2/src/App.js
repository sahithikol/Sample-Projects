import logo from './logo.svg';
import './App.css';
import ChatComponent from './ChatComponent';
import { Accordion } from './Components/Accordion';
import { Wizard } from './Components/Wizard';
import { TodoWrapper } from './Components/TodoWrapper';
import Tictactoe from './Components/Tictactoe';
import Comp3 from './Components/Comp3';
import CoundDownTimer from './Components/CountDownTimer';
import { useToggle } from './Hooks/useToggle';
import CategoryFilter from './Components/CategoryFilter';
import TwoStepLogin from './Components/TwoStepLogin';
import ProgressBar from './Components/ProgressBar';
import ProgressBarWrapper from './Components/ProgressBar';

function App() {
  const [toggle, value] = useToggle([1,4,6,313,0], 2)

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
      // <Accordion/> */}
      {/* // <Wizard/>
      // <TodoWrapper/> */}
      {/* <Tictactoe/> */}
      {/* <Comp3/> */}
      {/* <CoundDownTimer/>
      {value}
      <button onClick={() => {
        toggle();
      }}>Update me</button> */}
       <CategoryFilter/>
      <TwoStepLogin/>
      <ProgressBarWrapper/>
    </div>
  );
}

export default App;
