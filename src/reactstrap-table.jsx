import React, { Component } from 'react';
import { Table } from 'reactstrap';
import Row from './row';


export default class ReactstrapTable extends Component {


    renderRows = () => {
        const { rows } = this.props;
        const { header } = this.props;

        return !!rows ? rows.map((row, index) => (<Row key={index} expand={this.props.expandRowFunct} row={row} colSpanSize={!!header ? header.length + 1 : 1}></Row>)) : null
    }

    renderHeader = () => {
        const { header } = this.props;
        return !!header ? header.map((e, index) => (<th key={index}>{e}</th>)) : null;
    }

    render() {
        return (
            <Table striped >
                <thead>
                    <tr>
                        <th>Expand</th>
                        {this.renderHeader()}
                    </tr>
                </thead>
                <tbody>
                    {
                        this.renderRows()
                    }
                </tbody>
            </Table>
        )
    }
}
