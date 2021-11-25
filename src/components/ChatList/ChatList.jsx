import avatar from '../../img/avatar.jpg';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import uuid from 'react-uuid';
import './ChatList.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';
import { messagesSelector } from '../../Store/Messages/selectors';
import { useParams } from 'react-router';
import { chatsSelector } from '../../Store/Chats/selectors';
import { useDispatch } from 'react-redux';
import { addChatAction } from '../../Store/Chats/action';
import { ADD_CHAT_ACTION } from '../../Store/Chats/constants';

const ChatList = () => {
    const { chatId } = useParams();
    const [visible, setVisible] = useState(false);
    const [newChatName, setNewChatName] = useState('');
    const { messageList } = useSelector(messagesSelector);
    const { chatList } = useSelector(chatsSelector)
    const dispatch = useDispatch();
    const handleClose = () => setVisible(false);
    const handleOpen = () => setVisible(true);
    const handleChange = e => setNewChatName(e.target.value);
    const onAddChat = () => {
        // dispatch({type: ADD_CHAT_ACTION, payload: newChatName});
        dispatch(addChatAction(newChatName))
        setNewChatName('');
        handleClose();
        console.log(chatList)
    }


    return (
        <div className="ChatList__wrapper">
            <List>
                {Object.keys(chatList).map((id, i) => (
                    <ListItem key={uuid()} sx={{padding: '0'}}>
                        <ListItemAvatar sx={{ margin: '0 auto', textAlign: 'center' }}>
                            <Link to={`/chats/id${i + 1}`}><img src={avatar} alt="avt" width="30px" height="30px" className="Person-img" /></Link>
                        </ListItemAvatar>
                    </ListItem>
                ))}   
            </List>
            <span className="add-chat" onClick={handleOpen} style={{cursor: "pointer"}}>
                +
            </span>
            <Dialog open={visible} onClose={handleClose}>
                <DialogTitle>Please enter a name for new chat</DialogTitle>
                <TextField value={newChatName} onChange={handleChange} />
                <Button onClick={onAddChat} disabled={!newChatName}>
                    Submit
                </Button>
            </Dialog>
        </div>
    )
}

export default ChatList;