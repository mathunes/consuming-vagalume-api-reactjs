import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from '../pages/Main';

const Routes = () => {
    <BrowserRouter>
        <Switch>
            <Route exact path={process.env.PUBLIC_URL + '/'} component={Main} />
            <Route path={process.env.PUBLIC_URL + '/top100'} component={Top100} />
        </Switch>
    </BrowserRouter>
}

export default Routes;