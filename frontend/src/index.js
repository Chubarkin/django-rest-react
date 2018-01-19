import React from 'react';
import ReactDOM from 'react-dom';
import Table from './table.js'
import Service from '../services/base_service.js'


class App extends React.Component {
    render() {
        return (
            <Service url={'/api/posts'} successComponent={Table}
            successComponentArgs={{headFieldNames: {name: 'Name', message: 'Message'}, idField: 'id'}}/>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('react-table'));