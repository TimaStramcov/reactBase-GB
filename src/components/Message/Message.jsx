import { useState, useRef, useCallback, useEffect } from 'react';
import './Message.css';
import avatar from '../../img/avatar.jpg';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addMessageAction, addMessageWithFirebase, addMessageWithThunk, initMessageTracking } from '../../Store/Messages/action';
import { store } from '../../Store';
import { useParams } from 'react-router';
import { messagesSelector } from '../../Store/Messages/selectors';
import { profileSelector } from "../../Store/Profile/selectors";
import uuid from 'react-uuid';

function Message(){
    const [message, setMessage] = useState("");
    const { messageList } = useSelector(messagesSelector);
    const { userName } = useSelector(profileSelector);
    const dispatch = useDispatch();
    const isFocus = useRef(null)
    const { chatId } = useParams();
    const getValueMessage = (e) => setMessage(e.target.value);

    const onAddMessage = useCallback(() => {
        dispatch(addMessageWithFirebase({messageId: uuid(), chatId: chatId , message: message, author: userName, img: avatar}));
        setMessage("");
        isFocus.current?.focus()
      }, [chatId, message, userName, avatar, dispatch]);

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
            <Button sx={{ minWidth: '10%', color: 'gray'}} className="Send" onClick={onAddMessage}>&#9658;</Button>
        </div>
    )
}

export default Message;