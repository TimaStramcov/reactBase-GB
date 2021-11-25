import { CHANGE_NAME_ACTION } from "./constants"

const initialState = {
    userName: "Tima"
}

export const profileReducer = (store = initialState, action) => {
    switch (action.type) {
        case CHANGE_NAME_ACTION:
            return {
                ...store,
                userName: action.payload,
            };
        default:
            return store;
    }
}