import { useEffect, useState } from 'react';
import avatar from './img/avatar.jpg';
import bot from './img/avatar-bot.jpg';
import './App.css';



function MessageList(){

    const [message, setMessage] = useState("");
    const [messageList, setMessageList] = useState([]);
    
    const handleMessageText = (e) => setMessage(e.target.value);

    const clickBtnSend = () => {
        setMessageList([...messageList, {author: 'Tima', text: message, id: messageList.length, img: avatar}])
    };

    useEffect(() => {
        let i = messageList.length - 1;
        console.log(messageList[i]?.author)
        let authorEndMessage = messageList[i]?.author;
        if (authorEndMessage !== 'bot' && authorEndMessage !== undefined){
            setTimeout(() => {
                setMessageList([...messageList, {author: 'bot', text: `Hello, ${authorEndMessage}`, id: messageList.length, img: bot}])
            },1500)
        }
    }, [messageList])

    return(
        <div className="Chat__wrapper">
            <div className="Chat">
                <ul className="Chat__list">
                    {messageList.map((item) => (
                        <li key={item.id} className="Chat__message">
                            <div>
                                <img src={item.img} alt="avatar" width="30px" height="30px" className="Person-img"/>
                            </div>
                            <div className="Person-message">
                                <h2 className="Person-name">{item.author}</h2>
                                <h2 className="Person-text">{item.text}</h2>
                            </div>
                        </li>
                    )
                    )}
                </ul>
            </div>
            <div className="Message">
                <input type="text" className="Message-text" value={message} onChange={handleMessageText}/>
                <button className="Send" onClick={clickBtnSend}>&#9658;</button>
            </div>
        </div>
    )
}

export default MessageList;
