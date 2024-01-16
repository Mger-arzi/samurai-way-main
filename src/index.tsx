import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { state } from './redux/state';


ReactDOM.render(
    <App  DialogsData ={state.DialogsData} MessagesData = {state.MessagesData} Posts={state.Posts} />,
    document.getElementById('root')
);      