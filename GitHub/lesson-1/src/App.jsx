import logo from './logo.svg';
import './App.css';
import Message from './Message.jsx';

const homework = "lesson - 1";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Message homework={homework}/>
      </header>
    </div>
  );
}

export default App;
