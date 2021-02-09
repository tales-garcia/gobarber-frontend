import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Route from './Route';

const Routes: React.FC = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={SignIn} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/forgot" exact component={ForgotPassword} />
            <Route path="/reset" exact component={ResetPassword} />
        </Switch>
    </BrowserRouter>
);

export default Routes;