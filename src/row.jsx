import React, { Component } from 'react';
import { Button } from 'reactstrap';


export default class Row extends Component {

    state = {
        isExpand: false
    }

    renderExpandRow = () => {

        const { colSpanSize, row } = this.props;
        const { isExpand } = this.state;
        return isExpand ? (
            <tr>
                <td colSpan={colSpanSize}>
                    {
                        this.props.expand(row)
                    }
                </td>
            </tr>
        ) : null
    }

    renderRow = () => {
        const { row } = this.props;
        return !!row ?
            (
                <React.Fragment>
                    <td>{row.name}</td>
                    <td>{row.name}</td>
                    <td>{row.name}</td>
                </React.Fragment>
            ) : null;
    }

    render() {
        return (
            <React.Fragment>
                <tr>
                    <th scope="row" onClick={(e) => {
                        this.setState({
                            isExpand: !this.state.isExpand
                        });
                    }}>
                        <Button id="carts-fa-search-plus">
                            <i className="fas fa-search-plus" />
                        </Button>
                    </th>
                    {
                        this.renderRow()
                    }
                </tr>
                {
                    this.renderExpandRow()
                }
            </React.Fragment>
        )
    }
}
