import React from 'react';
import { useAsync } from 'react-async-hook';
import { useHistory } from 'react-router-dom';
import { getContinentsData } from '../../../app/api/api';
import { ContinentsDataTable } from './ContinentsDataTable.component';

export function ContinentsData() {
    const history = useHistory();
    const { result, error, loading } = useAsync(getContinentsData, []);

    function moveToDetails(element) {
        if (element.continent === '') return;
            history.push(history.location.pathname + '/' + encodeURIComponent(element.continent));
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
                    <ContinentsDataTable data={result.data} handleClick={moveToDetails} />
                </>
            }
        </>
    );
}