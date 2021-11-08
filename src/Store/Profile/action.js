import { CHANGE_NAME_ACTION } from "./constants";

export const changeUserNameAction = (name) => ({
    type: CHANGE_NAME_ACTION,
    payload: name,
})