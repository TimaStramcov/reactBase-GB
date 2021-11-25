import { BrowserRouter, Link, Switch, Route, Redirect} from 'react-router-dom';
import firebase from "firebase";
import Chats from './Screens/Chats/Chats.jsx';
import Profile from './Screens/Profile/Profile.jsx';
import logo from './img/logo.svg';
import './App.css';
import { ROUTES } from './Routing/constants.js';
import Friends from './Screens/Friends/Friends.jsx';
import SignUp from './Screens/SignUp/SignUp.jsx';
import SignIn from './Screens/SignIn/SignIn.jsx';
import { useEffect, useState } from 'react';
import PublicRoute from './HOCS/PublicRoute.jsx';
import PrivateRoute from './HOCS/PrivateRoute.jsx';
import { CircularProgress } from '@mui/material';

const App = () => {
  const [authed, setAuthed] = useState(null);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        setAuthed(true)
      } else {
        setAuthed(false)
      }
    setLoading(false)
    })
  }, [])

  if(loading){
    return <div className="App"><div className="App-header"><CircularProgress></CircularProgress></div></div>
  }

  return (
        <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <ul>
              <li>
                <Link to={ROUTES.MAIN}>Home</Link>
              </li>
              <li>
                <Link to={ROUTES.PROFILE}>Profile</Link>
              </li>
              <li>
                <Link to={ROUTES.CHATS}>Chats</Link>
              </li>
              <li>
                <Link to={ROUTES.FRIENDS}>Friends</Link>
              </li>
              <li>
                <Link to={ROUTES.SIGNIN}>Sign In</Link>
              </li>
              <li>
                <Link to={ROUTES.SIGNUP}>SIgn Up</Link>
              </li>
            </ul>
            <Switch>
              <PublicRoute 
                authed={authed}
                exact path={ROUTES.MAIN}
                render={ () => <img src={logo} className="App-logo" alt="logo" />}
              >  
              </PublicRoute>
              <PrivateRoute authed={authed} path={ROUTES.PROFILE}>
               <Profile />
              </PrivateRoute>
              <PrivateRoute
                authed={authed}
                exact
                path={ROUTES.CHATS}
                render={ () => <Chats />}
                >                
              </PrivateRoute>
              <PrivateRoute
                authed={authed}
                path={ROUTES.CHAT}
                render={ () => <Chats />}
                >                
              </PrivateRoute>
              <PrivateRoute
                authed={authed}
                path={ROUTES.FRIENDS}
                render={ () => <Friends />}
                >                
              </PrivateRoute>
              <PublicRoute 
                authed={authed}
                path={ROUTES.SIGNUP}
                render={ () => <SignUp />}
                >                
              </PublicRoute>
              <PublicRoute 
                authed={authed}
                path={ROUTES.SIGNIN}
                render={ () => <SignIn />}
                >                
              </PublicRoute>
              <PublicRoute authed={authed} path={ROUTES.NOT_FOUND}>
                404 not Found              
              </PublicRoute>
              <PublicRoute authed={authed}>
                <Redirect to={ROUTES.NOT_FOUND} />             
              </PublicRoute>
            </Switch>
            </header>
          </div>
        </BrowserRouter>
  );
}

export default App;
