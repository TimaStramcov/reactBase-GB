import { useState } from 'react'
import { Link } from 'react-router-dom';
import uuid from 'react-uuid';
import './ChatList.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';

const ChatList = ({chats, chatId}) => {
    const chatsArr = [];
    const pushChats = () => {
        for (let key in chats) {
            chatsArr.push(chats[key])
        }
    };
    pushChats()
    const [chatList, setChatList] = useState([...chatsArr]);

    console.log(chatsArr[0])

    return (
        <div className="ChatList__wrapper">
            <List>
                {chatList.map((item, i) => (
                    <ListItem key={uuid()} sx={{padding: '0'}}>
                        <ListItemAvatar sx={{ margin: '0 auto', textAlign: 'center' }}>
                            <Link to={`/chats/id${i + 1}`}><img src={item.img} alt="avt" width="30px" height="30px" className="Person-img" /></Link>
                        </ListItemAvatar>
                    </ListItem>
                ))}   
            </List>
        </div>
    )
}

export default ChatList;