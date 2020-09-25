import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { WorldData } from '../../components/CovidData/World/WorldData.component';
import DataRouter from './Data.router';

export default function MainRouter() {
    return(
        <main>
            <Switch>
                <Route exact path="/" component={WorldData} />
                <Route path="/data" component={DataRouter} />
                <Route component={Error} />
            </Switch>
        </main>
      );
}