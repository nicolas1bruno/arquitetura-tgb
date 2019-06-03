import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';

class Projetos extends Component {
    state = {
        characters: []
    };

    removeCharacter = index => {
        const { characters } = this.state;

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index;
            })
        });
    }    

    handleSubmit = character => {
        fetch("http://localhost:1234/projetos/", {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, cors, *same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrer: 'no-referrer', // no-referrer, *client
            body: JSON.stringify(character), // body data type must match "Content-Type" header
        })
        .then(
            response => response.json()
        );
        
        this.setState({characters: [...this.state.characters, character]});    
    }

    componentDidMount() {
        const url = "http://localhost:1234/projetos/";

        fetch(url)
        .then(result => result.json())
        .then(result => {
            this.setState({
                characters: result                
            })
        });
    }

    render() {
        const { characters } = this.state

        return (
            <div className="container">
                <Table
                    characterData={characters}
                    removeCharacter={this.removeCharacter}
                />
                <Form handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}

export default Projetos;