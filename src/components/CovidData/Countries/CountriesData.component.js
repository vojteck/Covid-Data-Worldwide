import React from 'react';
import { useAsync } from 'react-async-hook';
import { useHistory } from 'react-router-dom';
import { getCountriesData } from '../../../app/api/api';
import { CountriesDataTable } from './CountriesDataTable.component';

export function CountriesData() {
    const history = useHistory();
    const { result, error, loading } = useAsync(getCountriesData, []);

    function moveToDetails(element) {
        if (element.country === '') return;
        history.push(history.location.pathname + '/' + encodeURIComponent(element.country));
    }

    if (!result) {
        return <></>
    }

    return (
        <>
            {loading && <p>Loading...</p>}
            {error && alert(error.message)}
            {result &&
                <>
                    <CountriesDataTable data={result.data} handleClick={moveToDetails}></CountriesDataTable>
                </> 
            }
        </>
    );
}