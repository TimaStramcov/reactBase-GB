import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../../Store"
import { changeUserNameAction } from "../../Store/Profile/action";
import { profileSelector } from "../../Store/Profile/selectors";

const Profile = () => {
    const {userName} = useSelector(profileSelector);
    const dispatch = useDispatch();

     const setName = useCallback(() => dispatch(changeUserNameAction()), [dispatch, userName]);
      
    const handleChange = useCallback((e) => {
        dispatch(changeUserNameAction(e.target.value));
     }, [dispatch]);

    return (
        <>
        <div>
          <h4>Profile</h4>
          <div>{userName}</div>
        </div>
        <div>
          <input type="text" value={userName} onChange={handleChange} />
        </div>
        <div>
          <button onClick={setName}>Change Name</button>
        </div>
      </>
    )
}

export default Profile;