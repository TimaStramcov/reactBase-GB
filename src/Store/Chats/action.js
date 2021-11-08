import { ADD_CHAT_ACTION } from "./constants";

export const addChatAction = (chatName) => ({
    type: ADD_CHAT_ACTION,
    payload: chatName,
})