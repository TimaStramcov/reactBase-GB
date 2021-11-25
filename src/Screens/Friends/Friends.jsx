import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FriendsList } from "../../components/FriendsList";
import { store } from "../../Store"
import { changeUserNameAction } from "../../Store/Profile/action";
import { profileSelector } from "../../Store/Profile/selectors";

const Friends = () => {
    return(
        <FriendsList></FriendsList>
    )
}

export default Friends;