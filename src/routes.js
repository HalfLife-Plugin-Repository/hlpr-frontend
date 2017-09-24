import React from 'react';
import Route from 'react-router/lib/Route';
import IndexRoute from 'react-router/lib/IndexRoute';
import App from './components/App';
import Auth, {ForgotPassword, Login, Register} from './components/Auth';
import Home from './components/Home';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route component={Auth}>
            <Route path="/forgot-password" component={ForgotPassword}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
        </Route>
    </Route>
);