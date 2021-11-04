import { useDispatch, useSelector } from "react-redux";
import { store } from "../../Store"
import { toggleShowNameAction } from "../../Store/Profile/action";
import { profileSelector } from "../../Store/Profile/selectors";

const Profile = () => {
    const {name, showName} = useSelector(profileSelector);
    const dispatch = useDispatch();
    const handleToggleShowName = () => {
        dispatch(toggleShowNameAction())
    }

    return (
        <div>
            <button onClick={handleToggleShowName}>click</button>
            <div>{showName && name}</div>
        </div>
    )
}

export default Profile;