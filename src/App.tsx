import React from 'react';
import "./App.css"
import { Header } from './components/header/Header';
import { Navbar } from './components/navbar/Navbar';
import { Profile } from './components/profile/Profile';
import { Dialogs } from './components/dialogs/Dialogs';
import {  HashRouter, Route } from 'react-router-dom';
import { DialogItemType} from './components/dialogs/dialogsItem/DialogeItem';
import { MessageProps } from './components/dialogs/message/Message';
import { PostType } from './components/profile/MyPosts/Post/Post';

type AppTypeProps = {
    DialogsData: DialogItemType[]
    MessagesData: MessageProps[]
    Posts:PostType[]
}
const App : React.FC<AppTypeProps> = ({DialogsData, MessagesData, Posts})=> {
    return (
        <HashRouter>
            <div className='app-wprapper' >
                <Header />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={()=> <Dialogs  DialogsData = {DialogsData} MessagesData = {MessagesData}/>} />
                    <Route path= '/profile' render ={()=> <Profile Posts = {Posts}/>} />
                </div >
            </div>
        </HashRouter>
    );
};

export default App;