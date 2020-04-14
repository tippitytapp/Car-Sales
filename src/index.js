//library imports
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createStore} from "redux"
// component imports
import App from './App';
import {reducer} from './reducers'
//styling imports
import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(reducer);
const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
