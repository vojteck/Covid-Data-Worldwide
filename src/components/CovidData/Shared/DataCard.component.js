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
                    <Table hover>
                        <tbody>
                            {data && data.map((action, idx) => (
                                <tr key={idx}>
                                    <td>{action.name}</td>
                                    <td style={{ textAlign: 'right' }}>{humanizeNumber(action.value)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </>
    );
}