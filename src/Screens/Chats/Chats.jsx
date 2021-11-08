import { useParams } from 'react-router';
import Chat from '../../components/Chat/Chat.jsx';
import ChatList from '../../components/ChatList/ChatList.jsx';
import { useSelector } from 'react-redux';
import { chatsSelector } from '../../Store/Chats/selectors';

const Chats = () => {
  const { chatList } = useSelector(chatsSelector)
  const { chatId } = useParams();
  const chatExist = chatId && chatList.id;
  
  if (!chatExist) {
    return (
      <div className="ChatAppWrapper">
            <ChatList />
      </div>
    )}

    return (
        <div className="ChatAppWrapper">
            {/* <ChatList chats={chats} chatId={chatId} /> */}
            <Chat />
        </div>
    )
}

export default Chats;