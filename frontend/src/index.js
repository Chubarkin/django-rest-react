import React from 'react';
import ReactDOM from 'react-dom';
import Table from '../components/table.js'
import Form from '../components/form.js'
import Service from '../services/base_service.js'


class App extends React.Component {
    constructor(props) {
        super(props);
        const service = new Service('/api/posts/');
        this.state = {
            items: [],
            service: service
        }
        this.updateItems = this.updateItems.bind(this);
        this.state.service.get(this.updateItems, console.log);
    }

    updateItems(newItems) {
        this.setState({items: newItems});
    }

    render() {
        return (
            <div>
                <Table headFieldNames={{name: 'Name', message: 'Message'}} idField={'id'} items={this.state.items}/>
                <Form service={this.state.service} successCallback={this.updateItems}/>
            </div>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('react-table'));