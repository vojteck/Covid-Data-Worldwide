import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DataRouter from './Data.router';

export default function MainRouter() {
    return(
        <main>
            <Switch>
                <Route path="/data" component={DataRouter} />
            </Switch>
        </main>
      );
}