import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

import Register from './register/register';
import Login from './login/login'
import UpdateSettings from './settings/updateSettings'
import AuthSettings from './settings/authSettings'
import ProfilePage from './ProfilePage/ProfilePage'
import ProfileEditPage from './ProfileEditPage/ProfileEditPage';
import {connect} from "react-redux"


const Routes = ({isAuthenticated, history}) => {
    return (
        <Router>
            <Route exact path="/">
                {isAuthenticated ? (history.push("/home")) : (history.push("/login"))}
            </Route>
            <Route exact path='/register' component={Register}/>
            <Route exact path='/login' component={Login}></Route>
            <Route exact path='/update/settings' component={UpdateSettings}></Route>
            <Route exact path='/auth/settings' component={AuthSettings}></Route>
            <Route exact path='/profile' component={ProfilePage}></Route>
            <Route exact path='/profile_edit' component={ProfileEditPage}></Route>
        </Router>
    );
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.user.isAuthenticated,
  })
  
export default connect(mapStateToProps, {
})(Routes);

