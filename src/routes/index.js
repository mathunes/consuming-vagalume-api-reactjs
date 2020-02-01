import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from '../pages/Main';
import Top100 from '../pages/Top100';
import Search from '../pages/Search';
import Lyrics from '../pages/Lyric';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path={process.env.PUBLIC_URL + '/'} component={Main} />
            <Route path={process.env.PUBLIC_URL + '/top100/:type'} component={Top100} />
            <Route path={process.env.PUBLIC_URL + '/search/:text?'} component={Search} />
            <Route path={process.env.PUBLIC_URL + '/lyric/id=:id?'} component={Lyrics} />
        </Switch>
    </BrowserRouter>
)

export default Routes;