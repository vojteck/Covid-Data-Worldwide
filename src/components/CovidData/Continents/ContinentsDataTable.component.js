import React from 'react';
import { Table } from 'react-bootstrap';
import { humanizeNumber } from '../../Helpers/humanizeNumber.helper';
import { useSortableData } from '../../Hooks/useSortableData.hook';
import styles from './../Shared/DataTable.module.css'

export function ContinentsDataTable(props) {
    const { items, requestSort } = useSortableData(props.data);

    return (
        <>
            <Table striped bordered hover className={styles.datatable}>
                <thead>
                    <tr>
                        <th onClick={() => requestSort('continent')}>Name</th>
                        <th onClick={() => requestSort('cases')}>Cases</th>
                        <th onClick={() => requestSort('deaths')}>Deaths</th>
                        <th onClick={() => requestSort('recovered')}>Recovered</th>
                        <th onClick={() => requestSort('active')}>Active</th>
                        <th onClick={() => requestSort('critical')}>Critical</th>
                        <th onClick={() => requestSort('tests')}>Tests</th>
                    </tr>
                </thead>
                <tbody>
                    {items && items.map((element, idx) => (
                        <tr key={idx} onClick={() => props.handleClick(element)}>
                            <td>{element.continent}</td>
                            <td>{humanizeNumber(element.cases)}</td>
                            <td>{humanizeNumber(element.deaths)}</td>
                            <td>{humanizeNumber(element.recovered)}</td>
                            <td>{humanizeNumber(element.active)}</td>
                            <td>{humanizeNumber(element.critical)}</td>
                            <td>{humanizeNumber(element.tests)}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
}