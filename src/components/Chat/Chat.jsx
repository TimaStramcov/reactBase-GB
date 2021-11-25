import { useState } from 'react';
import MessageList from '../MessageList/MessageList';
import Message from '../Message/Message';
import './Chat.css';


function Chat(){
    

    return(
        <div className="Chat__wrapper">
            <MessageList />
            <Message />
        </div>
    )
}

export default Chat;