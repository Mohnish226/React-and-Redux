import React,{Component} from 'react';
import DummytextControls from './components/Dummytext-controls'
import './App.css';

class App extends Component{
  render() {
    return(
        <div className="row">
            <div className="col m3"></div>
            <div className="col m6">
                <center><h2>Welcome to Dummy Text Generator</h2></center>
                <DummytextControls/>
            </div>

        </div>
    )
  }
}

export default App;
