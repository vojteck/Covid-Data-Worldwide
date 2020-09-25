import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { WorldData } from '../../components/CovidData/World/WorldData.component';
import ContinentsRouter from './Continents.router';
import CountriesRouter from './Countries.router';

export default function DataRouter() {
    return(
        <Switch>
            <Route path='/data/world' component={WorldData}/>
            <Route path='/data/countries' component={CountriesRouter}/>
            <Route path='/data/continents' component={ContinentsRouter}/>
        </Switch>
      );
}   