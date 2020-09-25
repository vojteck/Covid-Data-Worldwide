import React from 'react';
import { useAsync } from 'react-async-hook';
import { Col, Row } from 'react-bootstrap';
import { getWorldData } from '../../../app/api/api';
import { timestampToDate } from '../../Helpers/timestampToDate.helper';
import { DataCard } from '../Shared/DataCard.component';
import { Date } from '../Shared/Date.component';

export function WorldData() {
    const { result, error, loading } = useAsync(getWorldData, []);

    if (!result) {
        return <></>
    }
    return (
        <>
            {loading && <p>Loading...</p>}
            {error && alert(error.message)}
            {result &&
                <>
                    <Row>
                        <Col>
                            <DataCard header="Cases" data={[{ name: 'Today', value: result.data.todayCases }, { name: 'Total', value: result.data.cases }, { name: 'Per one million', value: result.data.casesPerOneMillion }]}/>
                        </Col>
                        <Col>
                            <DataCard header="Deaths" data={[{ name: 'Today', value: result.data.todayDeaths }, { name: 'Total', value: result.data.deaths }, { name: 'Per one million', value: result.data.deathsPerOneMillion }]}/>
                        </Col>
                        <Col>
                            <DataCard header="Recovered" data={[{ name: 'Today', value: result.data.todayRecovered }, { name: 'Total', value: result.data.recovered }, { name: 'Per one million', value: result.data.recoveredPerOneMillion }]}/>
                        </Col>
                    </Row>

                    <Date date={timestampToDate(result.data.updated)}></Date>
                </>
            }
        </>
    );
}