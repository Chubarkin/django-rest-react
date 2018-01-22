import React from 'react';
import DjangoCSRFToken from 'django-react-csrftoken';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            message: '',
        };
        this.update = this.update.bind(this);

    }

    submitForm(e) {
        e.preventDefault();
        this.props.service.post(this.state, this.update, console.log);
    }

    update() {
        this.props.service.get(this.props.successCallback, console.log);
        this.clearFields();
    }

    clearFields() {
        this.setState({name: '', message: ''});
    }

    render() {
        return (
            <form method="POST">
                <DjangoCSRFToken />
                <div className="form-group">
                    <label> Name</label>
                    <input type="text" name="name" id="id_name" className="form-control" required={true} maxLength="50" onChange={(e) => {this.setState({name: e.target.value})}} value={this.state.name}/>
                </div>
                <div className="form-group">
                    <label> Message</label>
                    <textarea className="message form-control" rows="10" maxLength="300" id="id_message" required={true} cols="40" onChange={(e) => {this.setState({message: e.target.value})}} value={this.state.message}></textarea>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.submitForm.bind(this)}>Send</button>
            </form>
        );
    }
}
