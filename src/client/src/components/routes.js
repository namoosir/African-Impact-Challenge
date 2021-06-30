import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './HomePage/Home'
import Register from './register/register';
import Login from './login/login'
import UpdateSettings from './settings/updateSettings'
import AuthSettings from './settings/authSettings'
import Module from "./modules/module"

const Routes = () => {
    return (
        <Router>
            <Route exact path='/home' component={Home}/>
            <Route exact path='/register' component={Register}/>
            <Route exact path='/login' component={Login}></Route>
            <Route exact path='/update/settings' component={UpdateSettings}></Route>
            <Route exact path='/auth/settings' component={AuthSettings}></Route>
            <Route exact path='/module' component={Module}></Route>
        </Router>
    );
};

export default Routes

