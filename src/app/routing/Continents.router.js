import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ContinentData } from '../../components/CovidData/Continents/Continent/ContinentData.component';
import { ContinentsData } from '../../components/CovidData/Continents/ContinentsData.component';

export default function ContinentsRouter() {
    return (
        <Switch>
            <Route exact path='/data/continents' component={ContinentsData} />
            <Route path='/data/continents/:name' component={ContinentData} />
        </Switch>
    );
}