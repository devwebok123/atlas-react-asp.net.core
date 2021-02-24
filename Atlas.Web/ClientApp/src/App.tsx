import * as React from 'react';
import { Route } from 'react-router';
import Layout from './layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Announcement from './pages/Announcement';
import Vehicle from './pages/Vehicle';
import Router from './pages/Router';
import Group from './pages/Group';
import Staff from './pages/Staff';
import Counter from './components/Counter';

import './custom.css'

export default () => (
    <Layout>
        <Route exact path='/' component={Home} />
        <Route exact path='/announcement' component={Announcement} />
        <Route exact path='/vehicle' component={Vehicle} />
        <Route exact path='/router' component={Router} />
        <Route exact path='/group' component={Group} />
        <Route exact path='/staff' component={Staff} />
        <Route path='/counter' component={Counter} />
        <Route path='/login' component={Login} />
    </Layout>
);
