import { ADD_MESSAGE_ACTION, ADD_CHAT_ACTION, CHANGE_MESSAGE_ACTION } from "./constants"
import uuid from 'react-uuid';

const initialState = {
    messageList: {
    id1: [], 
    id2: [],
    id3: [],
    }
}

export const messagesReducer = (store = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE_ACTION:
            const { message, author, chatId, img } = action.payload;
            const currentChatMessages = store.messageList[chatId] || [];
            return {
                ...store,
                messageList: {
                    ...store.messageList,
                    [chatId]: [...currentChatMessages, {message, id: `${uuid()}`, author, img}],
                },
            };
        case CHANGE_MESSAGE_ACTION: {
            return {
              ...store,
              messageList: {
                ...store.messageList,
                [action.payload.chatId]: action.payload.messages,
              },
            };
          }
        default:
            return store;
    }
}