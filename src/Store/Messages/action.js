import { ADD_MESSAGE_ACTION, ADD_CHAT_ACTION, CHANGE_MESSAGE_ACTION } from "./constants";
import bot from '../../img/avatar-bot.jpg';
import firebase from "firebase";

export const addMessageAction = ({chatId, message, author, img}) => ({
    type: ADD_MESSAGE_ACTION,
    payload: { chatId, message, author, img }
})

export const addChatAction = (IdChat) => ({
    type: ADD_CHAT_ACTION,
    payload: { IdChat }
})

export const addMessageWithThunk = (payload) => (dispatch, getState) => {
    dispatch(addMessageAction(payload));
    if (payload.author !== 'bot'){
        setTimeout(() => {
            const botMessage = { chatId: payload.chatId , message: 'Hello, i am bot', author: 'bot', img: bot, };
            dispatch(addMessageAction(botMessage))
        }, 1000);
    }
}

const getMessageFromSnapshot = (snapshot) => {
    const messages = [];
  
    snapshot.forEach((message) => {
      messages.push(message.val());
    });
  
    return { chatId: snapshot.key, messages }
  }
  
  export const addMessageWithFirebase = (message) => async () => {
    firebase.database().ref("messages").child(message.chatId).child(message.messageId).set(message);
  };
  
  export const initMessageTracking = () => (dispatch) => {
    firebase.database().ref("messages").on("child_changed", (snapshot) => {
      const payload = getMessageFromSnapshot(snapshot);
      dispatch({
        type: CHANGE_MESSAGE_ACTION,
        payload,
      });
    });
  
    firebase.database().ref("messages").on("child_added", (snapshot) => {
      const payload = getMessageFromSnapshot(snapshot);
      dispatch({
        type: CHANGE_MESSAGE_ACTION,
        payload,
      });
    });
  };