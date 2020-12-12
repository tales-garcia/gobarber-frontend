import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Route from './Route';

const Routes: React.FC = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={SignIn} />
            <Route path="/signup" exact component={SignUp} isPrivate />
        </Switch>
    </BrowserRouter>
);

export default Routes;