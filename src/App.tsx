import React from 'react';
import './App.css';

function App() {
  return (
    <div className='app-wprapper'>
      <header className='header'>
        <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=-1&s=1" />
      </header>
      <nav className='nav'>
        <div>
          Profile
        </div>
        <div>
          Mesege
        </div>
      </nav>
      <div className='content'>
        Main content
      </div>
    </div>
  );
}

export default App