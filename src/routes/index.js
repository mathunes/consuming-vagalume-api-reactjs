import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from '../pages/Main';
import Top100 from '../pages/Top100';
import Search from '../pages/Search';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path={process.env.PUBLIC_URL + '/'} component={Main} />
            <Route path={process.env.PUBLIC_URL + '/top100/:type'} component={Top100} />
            <Route path={proscess.env.PUBLIC_URL + '/search?q='} component={Search} />
        </Switch>
    </BrowserRouter>
)

export default Routes;