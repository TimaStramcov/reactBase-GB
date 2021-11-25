import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import firebase from "firebase";
import { store } from "../../Store"
import { changeUserNameAction } from "../../Store/Profile/action";
import { profileSelector } from "../../Store/Profile/selectors";

const Profile = () => {
    const { userName } = useSelector(profileSelector);
    const dispatch = useDispatch();
    const [value, setValue] = useState(userName);

    const handleChange = useCallback((e) => {
        setValue(e.target.value);
        firebase.database().ref('profile').child(firebase.auth().currentUser.uid).child('name').set(e.target.value);
     }, []);

    const setName = useCallback(() => dispatch(changeUserNameAction(value)), [dispatch, value]);


    return (
        <>
        <div>
          <h4>Profile</h4>
          <div>{userName}</div>
        </div>
        <div>
          <input type="text" value={value} onChange={handleChange} />
        </div>
        <div>
          <button onClick={setName}>Change Name</button>
        </div>
      </>
    )
}

export default Profile;