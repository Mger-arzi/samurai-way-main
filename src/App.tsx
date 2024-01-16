import React from 'react';
import "./App.css"
import { Header } from './components/header/Header';
import { Navbar } from './components/navbar/Navbar';
import { Profile } from './components/profile/Profile';
import { Dialogs } from './components/dialogs/Dialogs';
import {  HashRouter, Route } from 'react-router-dom';
import {  state } from './redux/state';

const DialogsData = state.DialogsPage.DialogsData
const MessagesData = state.DialogsPage.MessagesData

const ProfilePage = state.ProfilePage.Posts

const App : React.FC = ({})=> {
    return (
        <HashRouter>
            <div className='app-wprapper' >
                <Header />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={()=> <Dialogs MessagesData = {MessagesData}  DialogsData = {DialogsData}/>} />
                    <Route path= '/profile' render ={()=> <Profile Posts = {ProfilePage}/>} />
                </div >
            </div>
        </HashRouter>
    );
};

export default App;