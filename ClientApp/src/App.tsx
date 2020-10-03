import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';
import MyTripsControl from './components/MyTripsControl';
import ProfileControl from './components/ProfileControl';

import './custom.css'

export default () => (
    <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/my-trips-control' component={MyTripsControl} />
        <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
        <Route path='/profile-control' component={ProfileControl} />
    </Layout>
);
