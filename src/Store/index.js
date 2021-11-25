import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { profileReducer } from './Profile/reducer';
import { chatsReducer } from './Chats/reducer';
import { messagesReducer } from './Messages/reducer';
import thunk from "redux-thunk";
import { middleware } from "../Middleware/middleware";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { friendsReducer } from "./Friends/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: 'root',
    storage,
  }

export const rootReducer = combineReducers({
    chats: chatsReducer,
    profile: profileReducer,
    messages: messagesReducer,
    friends: friendsReducer,
}); 

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(middleware, thunk))
);

export const persistor = persistStore(store);