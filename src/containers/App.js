import React, { Component } from 'react';
import { InitContainer } from './';
import Numberslist from './NumbersContainer';
import Header from '../components/Header'


class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className='container'>
                    <InitContainer />
                    <Numberslist/>
                </div>
            </div>
        )
    }
}

export default App;