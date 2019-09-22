import React from 'react';
import './App.css';

function Status(){
    return(
        <div className="status">
            <p>Status: pinging</p>
            <button>like</button>
        </div>
    );
}

function App() {
  return (
    <div>
        <Status/>
        Main
    </div>
  );
}

export default App;
