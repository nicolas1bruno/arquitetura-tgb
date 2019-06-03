import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = this.props.currentCharacter;
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }

    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { name } = this.state;
        const { cancelEdit } = this.props;

        return (
            <form>
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.handleChange} />
                <input
                    type="button"
                    value="Submit"
                    onClick={this.submitForm} />
                <input
                    type="button"
                    value="Cancel"
                    className="button muted-button"
                    onClick={cancelEdit} />
            </form>
        );
    }
}

export default Form;