import { useState } from 'react';
import MessageList from '../MessageList/MessageList';
import Message from '../Message/Message';
import './Chat.css';


function Chat(){
//   const [messageList, setMessageList] = useState([...chats[chatId].messages]);


    return(
        <div className="Chat__wrapper">
            <MessageList />
            <Message />
        </div>
    )
}

export default Chat;