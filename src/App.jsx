import logo from './img/logo.svg';
import { useState } from 'react';
import './App.css';
import MessageList from './components/messageList/MessageList.jsx';
import ChatList from './components/ChatList/ChatList';

const App = () => {
  const [messageList, setMessageList] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="ChatAppWrapper">
          <ChatList />
          <MessageList messageList={messageList} setMessageList={setMessageList}/>
        </div>
      </header>
    </div>
  );
}

export default App;
