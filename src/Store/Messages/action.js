import { ADD_MESSAGE_ACTION } from "./constants";

export const addMessageAction = (chatId, message, author) => ({
    type: ADD_MESSAGE_ACTION,
    payload: {chatId, message, author}
})