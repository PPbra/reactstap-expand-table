import React, { Component } from 'react';
import ReactstrapTable from './reactstrap-table';
import { Input, Label, Form } from 'reactstrap';


class App extends Component {

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


  render() {
    const header = ["Id", 'Name', 'Phone'];
    const rows = [
      {
        name: 'phuong',
        id: '1',
        phone: '0971486734'
      },
      {
        name: 'phuong',
        id: '2',
        phone: '0971486734'
      },
      {
        name: 'phuong',
        id: '3',
        phone: '0971486734'
      }
    ]

    return (
      <div className="App">
        <ReactstrapTable header={header} rows={rows} expandRowFunct={this.renderExpandRow} />
      </div>
    );
  }
}

export default App;
