import React, { Component } from 'react';
import { Table, Input, Label, Form } from 'reactstrap';
import Row from './row';


export default class ReactstrapTable extends Component {

    renderExpandRow = (row) => {
        return (
            <div className="animated fadeIn faster">
                <Form>
                    <Label>name</Label>
                    <Input
                        defaultValue={row.name}
                        disabled />
                </Form>
            </div>
        )
    }

    renderRows = () => {
        const { rows } = this.props;
        const { header } = this.props;

        return !!rows ? rows.map((row, index) => (<Row key={index} expand={this.renderExpandRow} row={row} colSpanSize={!!header ? header.length : 0}></Row>)) : null
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
