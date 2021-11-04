import { useState } from 'react';
import MessageList from '../MessageList/MessageList';
import Message from '../Message/Message';
import './Chat.css';


function Chat({ chats, chatId }){
  const [messageList, setMessageList] = useState([...chats[chatId].messages]);


    return(
        <div className="Chat__wrapper">
            <MessageList chats={chats} messageList={messageList} setMessageList={setMessageList} />
            <Message messageList={messageList} setMessageList={setMessageList}/>
        </div>
    )
}

export default Chat;