import { useEffect} from 'react';
import './MessageList.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import bot from '../../img/avatar-bot.jpg';
import uuid from 'react-uuid';

function MessageList(props){
    const {chats} = props;
    const {messageList} = props;
    const {setMessageList} = props;

    useEffect(() => {
        const i = messageList.length - 1;
        const authorEndMessage = messageList[i]?.author;
        if (authorEndMessage !== 'bot' && authorEndMessage !== undefined){
            const renderMessage = setTimeout(() => {
                setMessageList([...messageList, {author: 'bot', text: `Hello, ${authorEndMessage}`, id: messageList.length, img: bot}])
            },1500)
            return () => clearTimeout(renderMessage)
        }
    }, [messageList])

    return(
        <div className="Chat">
            <List className="Chat__list">
                {messageList.map((item) => (
                    <ListItem key={uuid()} className="Chat__message">
                        <ListItemAvatar>
                            <img src={item.img} alt="avatar" width="30px" height="30px" className="Person-img"/>
                        </ListItemAvatar>
                        <ListItemText sx={{color: 'black'}} primary={item.text} secondary={item.author}/>
                    </ListItem>
                    )
                )}
            </List>
        </div>
    )
}

export default MessageList;
