import React from 'react';
import { useAsync } from 'react-async-hook';
import { Button, Col, Row } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import { getCountryData } from '../../../../app/api/api';
import { DataCard } from '../../Shared/DataCard.component';
 
export function CountryData() {
    const history = useHistory();
    const id = useParams();

    const { result, error, loading } = useAsync(getCountryData, [id.name]);

    if (!result) {
        return <></>
    }

    return (
        <>
            {loading && <p>Loading...</p>}
            {error && alert(error.message)}
            {result && 
                <>
                <Button variant="light" onClick={() => history.goBack()}>Back</Button>
                <Row>
                    <Col>
                        <DataCard header="Info" data={[{ name: 'Name', value: result.data.country }, { name: 'Population', value: result.data.population, shouldNotHumanize: true }]} />
                    </Col>
                    <Col>
                        <DataCard header="Now" data={[{ name: 'Active', value: result.data.active }, { name: 'Critical', value: result.data.critical }]} />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <DataCard header="Cases" data={[{ name: 'Today', value: result.data.todayCases }, { name: 'Total', value: result.data.cases }, { name: 'Per one million', value: result.data.casesPerOneMillion }]} />
                    </Col>
                    <Col>
                        <DataCard header="Deaths" data={[{ name: 'Today', value: result.data.todayDeaths }, { name: 'Total', value: result.data.deaths }, { name: 'Per one million', value: result.data.deathsPerOneMillion }]} />
                    </Col>
                    <Col>
                        <DataCard header="Recovered" data={[{ name: 'Today', value: result.data.todayRecovered }, { name: 'Total', value: result.data.recovered }, { name: 'Per one million', value: result.data.recoveredPerOneMillion }]} />
                    </Col>
                </Row>
                </>
            }
        </>
    );
}