import React from 'react';
import '../assets/css/app.css';
import logo from '../assets/images/logo.svg';
import Clock from './clock';

const App = () => (
    <div>
        <div className="app">
            <Clock favColor="blue"/>
        </div>
    </div>
);

export default App;
