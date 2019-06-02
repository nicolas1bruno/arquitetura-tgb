import React, { Component } from 'react';

class App extends Component {
    state = {
        data: []
    };

    // Code is invoked after the component is mounted/inserted into the DOM tree.
    componentDidMount() {
        const url = "http://localhost:1234/informations/list";

        fetch(url)
        .then(result => result.json())
        .then(result => {
            this.setState({
                data: result
            })
        });
    }

    render() {
        const { data } = this.state;
        
        const result = []; 
        
        data.forEach(element => {
            result.push(<li key={element._id}>{element.maquina}</li>);
        });
                
        return <ul>{result}</ul>;
    }
}

export default App;