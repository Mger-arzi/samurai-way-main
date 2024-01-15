import React from 'react';
import "./App.css"
import { Header } from './components/header/Header';
import { Navbar } from './components/navbar/Navbar';
import { Profile } from './components/profile/Profile';
import { Dialogs } from './components/dialogs/Dialogs';
import { BrowserRouter, HashRouter, Route } from 'react-router-dom';

const App = () => {
    return (
        <HashRouter>
            <div className='app-wprapper' >
                <Header />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' component={Dialogs} />
                    <Route path= '/profile' component={Profile} />
                </div>
            </div>
        </HashRouter>
    );
};

export default App;