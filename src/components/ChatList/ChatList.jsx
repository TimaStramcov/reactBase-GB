import { useState } from 'react'
import uuid from 'react-uuid';
import './ChatList.css';
import avatar from '../../img/avatar.jpg';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';

const ChatList = () => {
    const [chatList, setChatList] = useState([{name: avatar, id: uuid()}, {name: avatar, id: uuid()}])

    return (
        <div className="ChatList__wrapper">
            <List>
                {chatList.map((item) => (
                    <ListItem key={uuid()} sx={{padding: '0'}}>
                        <ListItemAvatar sx={{ margin: '0 auto', textAlign: 'center' }}>
                            <img src={item.name} alt="avt" width="30px" height="30px" className="Person-img"/>
                        </ListItemAvatar>
                    </ListItem>
                ))}   
            </List>
        </div>
    )
}

export default ChatList;