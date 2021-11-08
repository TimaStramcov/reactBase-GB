import { combineReducers, createStore } from "redux";
import { profileReducer } from './Profile/reducer';
import { chatsReducer } from './Chats/reducer';
import { messagesReducer } from './Messages/reducer';

export const store = createStore(combineReducers({
    chats: chatsReducer,
    profile: profileReducer,
    messages: messagesReducer,
}),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);   