import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect} from 'react';
import { useParams } from 'react-router';
import './MessageList.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import uuid from 'react-uuid';
import { chatsSelector } from '../../Store/Chats/selectors';
import { addMessageAction, addMessageWithThunk, initMessageTracking } from '../../Store/Messages/action';
import { messagesSelector } from '../../Store/Messages/selectors';

function MessageList(){
    const { messageList } = useSelector(messagesSelector);
    const { chatList } = useSelector(chatsSelector)
    const { chatId } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initMessageTracking());
      }, []);

    return(
        <div className="Chat">
            <List className="Chat__list">
                {
                messageList[chatId].map((item) => (
                    <ListItem key={uuid()} className="Chat__message">
                        <ListItemAvatar>
                            <img src={item.img} alt="avatar" width="30px" height="30px" className="Person-img"/>
                        </ListItemAvatar>
                        <ListItemText sx={{color: 'black'}} primary={item.message} secondary={item.author}/>
                    </ListItem>
                    )
                )}
            </List>
        </div>
    )
}

export default MessageList;
