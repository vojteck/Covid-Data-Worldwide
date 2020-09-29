import React from 'react';
import { Card, Table } from 'react-bootstrap';
import { humanizeNumber } from '../../Helpers/humanizeNumber.helper';

export function DataCard(props) {
    const { header, data } = props;
    return (
        <>
            <Card className="border-white">
                <Card.Body>
                    <Card.Header as="h5">
                        {header}
                    </Card.Header>
                    <Card.Text>
                        <Table hover>
                            <tbody>
                                {data && data.map(action => (
                                    <tr>
                                        <td>{action.name}</td>
                                        <td style={{ textAlign: 'right' }}>{humanizeNumber(action.value)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}