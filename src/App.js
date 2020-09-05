import React from 'react';
import './App.css';
import SideBar from './Sidebar';

function App() {
  return (
    // BEM naming convention
    <div className="app">
    <div className="app__body">
      {/* <h1>Let's build Whats app</h1> */}
        <SideBar />
    </div>
    {/* {sidebar} */}
    {/* {Chatbar} */}
    </div>
  );
}

export default App;
