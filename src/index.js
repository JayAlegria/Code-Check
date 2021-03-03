import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './App';

/** styles */
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/styles/main.scss'

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    ,document.getElementById('root') 
);

