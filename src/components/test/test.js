import React from 'react';

class Test extends React.Component {
    state = {
        title: '',
        body: ''
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    title: data.title,
                    body: data.body
                })
            })
    };
    render() {
        return (
            <div>
                <h1>test</h1>
                <h2>{ this.state.title}</h2>
                <p>{ this.state.body }</p>
            </div>
        );
    }
}

export default Test;