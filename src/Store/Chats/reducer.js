import { ADD_CHAT_ACTION } from "./constants"

const initialState = {
    chatList: [],
    something: {}
}

export const chatsReducer = (store = initialState, action) => {
    switch (action.type) {
        case ADD_CHAT_ACTION:
            return {
                ...store,
                chatList: [
                    ...store.chatList,
                    {
                        id: `id${store.chatList.length}`,
                        name: action.payload,
                        img: action.payload,
                    }
                ],
            };
        default:
            return store;
    }
}