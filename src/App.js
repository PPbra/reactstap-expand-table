import React, { Component } from 'react';
import ReactstrapTable from './reactstrap-table';

class App extends Component {
  render() {
    const header = ["Expand", "Id", 'Name', 'Phone'];
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
        <ReactstrapTable header={header} rows={rows} />
      </div>
    );
  }
}

export default App;
