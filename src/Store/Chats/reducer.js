import { ADD_CHAT_ACTION } from "./constants"

const initialState = {
    chatList: [{name: "chatName"}, {name: "chatName"}, {}],
    something: {}
}

export const chatsReducer = (store = initialState, action) => {
    switch (action.type) {
        case ADD_CHAT_ACTION:
            const { chatName } = action.payload;
            return {
                ...store,
                chatList: [
                    ...store.chatList,
                    {
                        id: `id${store.chatList.length + 1}`,
                        name: chatName,
                    }
                ],
            };
        default:
            return store;
    }
}