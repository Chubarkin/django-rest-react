import React from 'react';
import DjangoCSRFToken from 'django-react-csrftoken';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: {value: '', error: ''},
            message: {value: '', error: ''},
        };
        this.update = this.update.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleErrors = this.handleErrors.bind(this);

    }

    submitForm(e) {
        e.preventDefault();
        this.props.service.post({name: this.state.name.value, message: this.state.message.value}, this.update, this.handleErrors);
    }

    update() {
        this.props.service.get(this.props.successCallback, console.log);
        this.clearFields();
    }

    handleErrors(data) {
        if (!!data.name) {
            let state = Object.assign(this.state.name);
            state.error = data.name[0];
            this.setState({name: state});
        }
        if (!!data.message) {
            let state = Object.assign(this.state.message);
            state.error = data.message[0];
            this.setState({message: state});
        }
    }

    clearFields() {
        let name = Object.assign(this.state.name);
        name.value = '';
        name.error = '';
        let message = Object.assign(this.state.message);
        message.value = '';
        message.error = '';
        this.setState({name: name, message: message});
    }

    handleNameChange(e) {
        let formField = Object.assign(this.state.name);
        formField.value = e.target.value;
        if (formField.value.length > 0)
            formField.error = '';
        this.setState({field: formField});
    }

    handleMessageChange(e) {
        let formField = Object.assign(this.state.message);
        formField.value = e.target.value;
        if (formField.value.length > 0)
            formField.error = '';
        this.setState({field: formField});
    }

    render() {
        return (
            <form method="POST">
                <DjangoCSRFToken />
                <div className={"form-group" +  (!!this.state.name.error ? " has-error" : '')}>
                    <label> Name</label>
                    <input type="text" name="name" id="id_name" className="form-control" required={true} maxLength="50" onChange={this.handleNameChange} value={this.state.name.value}/>
                    {this.state.name.error.length > 0 &&  <span className="help-block">{this.state.name.error}</span>}
                </div>
                <div className={"form-group" +  (!!this.state.message.error ? " has-error" : '')}>
                    <label> Message</label>
                    <textarea className="message form-control" rows="10" maxLength="300" id="id_message" required={true} cols="40" onChange={this.handleMessageChange} value={this.state.message.value}></textarea>
                    {this.state.message.error.length > 0 &&  <span className="help-block">{this.state.message.error}</span>}
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.submitForm.bind(this)}>Send</button>
            </form>
        );
    }
}
