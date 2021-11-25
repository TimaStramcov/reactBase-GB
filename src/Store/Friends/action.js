import { DOGS_FRIENDS_URL } from "../../components/Api/constants";
import { GET_FRIENDS_ERROR_ACTION, GET_FRIENDS_START_ACTION, GET_FRIENDS_SUCCESS_ACTION } from "./constants";

const getFriendsStartAction = () => ({
    type: GET_FRIENDS_START_ACTION,
})

const getFriendsSuccessAction = (payload) => ({
    type: GET_FRIENDS_SUCCESS_ACTION,
    payload,
})

const getFriendsErrorAction = () => ({
    type: GET_FRIENDS_ERROR_ACTION,
})

export const getFriendsRequestWithThunk = () => async (dispatch, getState) => {
    dispatch(getFriendsStartAction())
    try {
        const response = await fetch(DOGS_FRIENDS_URL)

        if(!response.ok){
            throw new Error(response.status)
        }

        const result = await response.json();
        dispatch(getFriendsSuccessAction(result?.message?.terrier ?? []))
    }
    catch{
        dispatch(getFriendsErrorAction())
    }
}