import { GET_FRIENDS_ACTION, GET_FRIENDS_ERROR_ACTION, GET_FRIENDS_START_ACTION, GET_FRIENDS_SUCCESS_ACTION } from "./constants"

const initialState = {
    loading: true, 
    error: false,
    dogs: [],
}

export const friendsReducer = (store = initialState, action) => {
    switch (action.type) {
        case GET_FRIENDS_START_ACTION:
            return {
                ...store,
                loading: true,
                error: false,
            };
        case GET_FRIENDS_SUCCESS_ACTION:
            return {
                ...store,
                loading: false,
                dogs: action.payload,
            };
        case GET_FRIENDS_ERROR_ACTION:
            return {
                ...store,
                error: true,
                loading: false,
            };
        default:
            return store;
    }
}