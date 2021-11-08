import { ADD_MESSAGE_ACTION } from "./constants"

const initialState = {
    messageList: {}
}

export const messagesReducer = (store = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE_ACTION:
            const { message, author, chatId, img } = action.payload;
            const currentChatMessages= store.messageList[action.chatId] || [];
            return {
                ...store,
                messageList: {
                    ...store.messageList,
                    [chatId]: [...currentChatMessages, {...message, id: `${chatId}${currentChatMessages.lenght}`, author, img}],
                },
            };
        default:
            return store;
    }
}