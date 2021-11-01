import { useState, useRef } from 'react';
import './Message.css';
import avatar from '../../img/avatar.jpg';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Message(props){
    const [message, setMessage] = useState("");
    const {messageList} = props;
    const {setMessageList} = props;
    const getValueMessage = (e) => setMessage(e.target.value);
    const clickBtnSend = () => {
        setMessageList([...messageList, {author: 'Tima', text: message, id: messageList.length, img: avatar}])
        isFocus.current?.focus()
    };
    const isFocus = useRef(null)


    return(
        <div className="Message">
            <TextField
                className="Message-text" value={message} onChange={getValueMessage}
                id="outlined-textarea"
                label="Message"
                placeholder="Message"
                multiline
                autoFocus
                inputRef={isFocus}
            />
            <Button sx={{ minWidth: '10%', color: 'gray'}} className="Send" onClick={clickBtnSend}>&#9658;</Button>
        </div>
    )
}

export default Message;