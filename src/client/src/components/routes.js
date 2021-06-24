import {BrowserRouter as Router, Route} from 'react-router-dom';

import Register from './register/register';
import Login from './login/login'
import UpdateSettings from './settings/updateSettings'
import AuthSettings from './settings/authSettings'
import ProfilePage from './ProfilePage/ProfilePage'
import ProfileSearchPage from './ProfileSearchPage/ProfileSearchPage'

const Routes = () => {
    return (
        <Router>
            <Route exact path='/register' component={Register}/>
            <Route exact path='/login' component={Login}></Route>
            <Route exact path='/update/settings' component={UpdateSettings}></Route>
            <Route exact path='/auth/settings' component={AuthSettings}></Route>
            <Route exact path='/profile' component={ProfilePage}></Route>
            <Route exact path='/profile_search' component={ProfileSearchPage}></Route>
        </Router>
    );
};

export default Routes

