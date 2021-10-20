import logo from './logo.svg';
import './App.css';
import MessageList from './MessageList.jsx';




const App = () => {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MessageList />
      </header>
    </div>
  );
}

export default App;
