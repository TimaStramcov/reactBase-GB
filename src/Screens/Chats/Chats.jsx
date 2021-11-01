import { useState } from 'react';
import { Redirect, useParams } from 'react-router';
import ChatList from '../../components/ChatList/ChatList';
import MessageList from '../../components/MessageList/MessageList.jsx';
import avatar from '../../img/avatar.jpg';
import { ROUTES } from '../../Routing/constants.js';

const initialChats = {
 id1: {
   name: "Tima",
   img: avatar,
   messages: [{img: avatar, text: "I`m human", author: "Tima"}, {img: avatar, text: "how are you", author: "Tima"}],
 },
 id2: {
   name: "Gergy",
   img: avatar,
   messages: [{img: avatar, text: "I`m bot", author: "bot"}],
 },
};

const Chats = () => {
  const { chatId } = useParams();
  const [chats, setChats] = useState(initialChats);
  const [messageList, setMessageList] = useState([...chats[chatId].messages]);

    if (!chats[chatId]) {
        return null
    }
    // if (!chatId) return <Redirect to={ROUTES.NOT_FOUND} />

    return (
        <div className="ChatAppWrapper">
            <ChatList chats={chats} chatId={chatId}/>
            <MessageList messageList={messageList} setMessageList={setMessageList}/>
        </div>
    )
}

export default Chats;