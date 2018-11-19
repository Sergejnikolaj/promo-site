import React, {Component} from 'react';
import LoginControl from './LoginControl';
import {BrowserRouter} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <LoginControl/>
            </BrowserRouter>
        );
    }
}

export default App;
