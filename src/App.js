import React from 'react';
import './App.css';
import SideBar from './Sidebar';
import Chat from './rightSide/Chat/Chat';

function App() {
  return (
    // BEM naming convention
    <div className="app">
    <div className="app__body">
      {/* <h1>Let's build Whats app</h1> */}
        <SideBar />
        <Chat />
    </div>
    </div>
  );
}

export default App;
