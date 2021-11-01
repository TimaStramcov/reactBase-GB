import { BrowserRouter, Link, Switch, Route, Redirect} from 'react-router-dom';
import Chats from './Screens/Chats/Chats.jsx';
import Profile from './Screens/Profile/Profile.jsx';
import logo from './img/logo.svg';
import './App.css';
import { ROUTES } from './Routing/constants.js';

const App = () => {

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
            </ul>
            <Switch>
              <Route 
                exact path={ROUTES.MAIN}
                render={ () => <img src={logo} className="App-logo" alt="logo" />}
              >  
              </Route>
              <Route path={ROUTES.PROFILE}>
               <Profile />
              </Route>
              <Route
                exact
                path={ROUTES.CHATS}
                render={ () => <Chats />}
                >                
              </Route>
              <Route 
                path={ROUTES.CHAT}
                render={ () => <Chats />}
                >                
              </Route>
              <Route path={ROUTES.NOT_FOUND}>
                404 not Found              
              </Route>
              <Route>
                <Redirect to={ROUTES.NOT_FOUND} />             
              </Route>
            </Switch>
            </header>
          </div>
        </BrowserRouter>
  );
}

export default App;
