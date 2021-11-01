import { useState } from 'react'
import { Redirect} from 'react-router-dom';
import { ROUTES } from '../../Routing/constants.js';
import uuid from 'react-uuid';
import './ChatList.css';
import avatar from '../../img/avatar.jpg';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { useEffect } from 'react';

const ChatList = ({chats, chatId}) => {
    const [chatList, setChatList] = useState([chats.id1, chats.id2])

    const clickChat = () => {
       return <Redirect to={ROUTES.CHATS}></Redirect>
    }

    return (
        <div className="ChatList__wrapper">
            <List>
                {chatList.map((item) => (
                    <ListItem key={uuid()} sx={{padding: '0'}}>
                        <ListItemAvatar sx={{ margin: '0 auto', textAlign: 'center' }}>
                            <img onClick={clickChat} src={item.img} alt="avt" width="30px" height="30px" className="Person-img"/>
                        </ListItemAvatar>
                    </ListItem>
                ))}   
            </List>
        </div>
    )
}

export default ChatList;