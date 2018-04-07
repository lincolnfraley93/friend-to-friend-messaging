import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import io from 'socket.io-client';
let socket = io('http://localhost:4000');

class App extends Component {
    componentDidMount = () => {
        socket.on('connect', data => {
            console.log(`Connected. Client ID: ${data}`);
            this.setState({clientId: data});
        })
    }

    state = {
        inputText: '',
        clientId: null
    }

    onInputChange = (event) => {
        console.log('onInputChange');
        console.log(event.target.value);
        this.setState({inputText: event.target.value}); 
    }

    sendMessage = () => {
        let messageData = {
            clientId: this.state.clientId,
            message: this.state.inputText
        };
        socket.emit('chatMessage', messageData);
        console.log("Sending message: " + this.state.inputText); 
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="Message" onChange={this.onInputChange}/>
                <button type="button" onClick={this.sendMessage}>Send</button>
            </div>
        );
    }
}

export default App;
