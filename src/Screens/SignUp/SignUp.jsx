import { useCallback, useState } from "react";
import firebase from "firebase";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ROUTES } from "../../Routing/constants";
import { store } from "../../Store"
import { changeUserNameAction } from "../../Store/Profile/action";
import { profileSelector } from "../../Store/Profile/selectors";

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleEmailChange = e => setEmail(e.target.value);
    const handlePasswordChange = e => setPassword(e.target.value);

    const handleSignUp = async (e) => {
        e.preventDefault();
        setError('')

        try{
            await firebase.auth().createUserWithEmailAndPassword(email, password);
        }
        catch (error){
            setError(error.message)
        }
    }

    return(
        <>
        <div>
            <input type="email" value={email} onChange={handleEmailChange}/>
        </div>
        <div>
            <input type="password" value={password} onChange={handlePasswordChange}/>
        </div>
        <div>
            <button onClick={handleSignUp} type="submit">Submit</button>
        </div>
        {error && <div>{error}</div>}
        <div>
            Registered? <Link to={ROUTES.SIGNIN}> sign in</Link>
        </div>
        </>
    )
}

export default SignUp;