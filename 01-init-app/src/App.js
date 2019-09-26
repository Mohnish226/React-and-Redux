import React,{Component} from 'react';
import './App.css';
import Status from './component/Status'
import StatusAll from "./component/StatusAll";

class App extends Component{
    render() {
        return (
            <div>
                <StatusAll/>
            </div>
        );
    }
}
export default App;
