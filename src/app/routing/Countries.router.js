import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { CountriesData } from '../../components/CovidData/Countries/CountriesData.component';
import { CountryData } from '../../components/CovidData/Countries/Country/CountryData.component';

export default function CountriesRouter() {
    return (
        <Switch>
            <Route exact path='/data/countries' component={CountriesData} />
            <Route path='/data/countries/:name' component={CountryData} />
        </Switch>
    );
}