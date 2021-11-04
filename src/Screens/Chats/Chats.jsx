import { useState } from 'react';
import { Redirect, useParams } from 'react-router';
import Chat from '../../components/Chat/Chat.jsx';
import ChatList from '../../components/ChatList/ChatList.jsx';
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
 id3: {
  name: "Fury",
  img: avatar,
  messages: [{img: avatar, text: "I`m bot", author: "bot"}],
},
};

const Chats = () => {
  const { chatId } = useParams();
  const [chats, setChats] = useState(initialChats);
  const chatExist = chatId && initialChats[chatId];
  
  if (!chatExist) {
    return (
      <div className="ChatAppWrapper">
            <ChatList chats={chats} chatId={chatId}/>
      </div>
    )}

    return (
        <div className="ChatAppWrapper">
            {/* <ChatList chats={chats} chatId={chatId} /> */}
            <Chat chats={chats} chatId={chatId} />
        </div>
    )
}

export default Chats;