import {BrowserRouter as Router, Route} from 'react-router-dom';

import Register from './register/register';
import Login from './login/login'

const Routes = () => {
    return (
        <Router>
            <Route exact path='/register' component={Register}/>
            <Route exact path='/login' component={Login}></Route>
        </Router>
    );
};

export default Routes

