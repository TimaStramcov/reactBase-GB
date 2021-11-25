import { useParams } from 'react-router';
import Chat from '../../components/Chat/Chat.jsx';
import ChatList from '../../components/ChatList/ChatList.jsx';
import { useSelector } from 'react-redux';
import { chatsSelector } from '../../Store/Chats/selectors';
import { messagesSelector } from '../../Store/Messages/selectors';

const Chats = () => {
  const { chatList } = useSelector(chatsSelector)
  const { messages } = useSelector(messagesSelector);
  const { chatId } = useParams();
  const chatExist = chatId;

  if (!chatExist) {
    return (
      <div className="ChatAppWrapper">
            <ChatList />
      </div>
    )}

    return (
        <div className="ChatAppWrapper">
            <ChatList/>
            <Chat />
        </div>
    )
}

export default Chats;