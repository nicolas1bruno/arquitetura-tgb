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