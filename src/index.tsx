import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { state } from './redux/state';
// let DialogsData = [
//     { id: "1", name: "Mger" },
//     { id: "2", name: "David" },
//     { id: "3", name: "Violetta" },
//     { id: "4", name: "Andrey" },
//     { id: "5", name: "Sasha" },
//     { id: "6", name: "Davit" },
// ];
// let MessagesData = [
//     { id: "1", message: "Lorem, ipsum dolor.meM" },
//     { id: "2", message: "Lorem, ipsum dolor sit amet consectetur adipisicing." },
//     { id: "3", message: "Violetta" },
//     { id: "4", message: "Lorem ipsum dolor sit." },
//     { id: "5", message: "Sasha" },
//     { id: "6", message: "Davit" },
// ]; 
// let Posts = [
//     { id: '1', message: 'Hello', likesCount: 12 },
//     { id: '2', message: 'By by', likesCount: 13 },
// ]


ReactDOM.render(
    <App  DialogsData ={state.DialogsData} MessagesData = {state.MessagesData} Posts={state.Posts} />,
    document.getElementById('root')
);      