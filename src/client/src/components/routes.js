import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './HomePage/Home'
import Register from './register/register';
import Login from './login/login'
import UpdateSettings from './settings/updateSettings'
import AuthSettings from './settings/authSettings'
import ProfilePage from './ProfilePage/ProfilePage'
import ProfileSearchPage from './ProfileSearchPage/ProfileSearchPage'
import ProfileEditPage from './ProfileEditPage/ProfileEditPage'
import Module from "./modules/module"
import ModuleEdit from "./modules/moduleEdit"
import Submission from "./modules/SubmissionsView/submission"
import header from "./AuthHeader"
import {connect} from "react-redux"


const Routes = ({user, isAuthenticated}) => {
    return (

        <Router>
            <Route exact path='/home' component={Home}/>
            <Route exact path='/register' component={Register}/>
            <Route exact path='/login' component={Login}></Route>
            <Route exact path='/update/settings' component={UpdateSettings}></Route>
            <Route exact path='/auth/settings' component={AuthSettings}></Route>

            <Route exact path='/profile' component={ProfilePage}></Route>
            <Route exact path='/profile_search' component={ProfileSearchPage}></Route>
            <Route exact path='/profile_edit' component={ProfileEditPage}></Route>

            <Route exact path='/module' component={Module}></Route>
            <Route exact path='/module_edit' component={ModuleEdit}></Route>
            <Route exact path='/submissions' component={Submission}></Route>


        </Router>
    );
};

const mapStateToProps = (state) => ({
    user: state.user.user.sentUser,
    isAuthenticated: state.user.isAuthenticated,  
  })
  
  export default connect(mapStateToProps, {
  })(Routes);

