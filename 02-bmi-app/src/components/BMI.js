import React, {Component} from 'react';


export default class BMI extends Component{
    constructor(props){
        super(props)
        this.state = {
            height: 0,
            weight: 0
        }

        this.handleHeight = this.handleHeight.bind(this)
        this.handleWeight = this.handleWeight.bind(this)
    }

    handleHeight(ev){
        console.log("Height :"+ev.target.value);
        this.setState({
            height: ev.target.value
        })
    }

    handleWeight(ev){
        console.log("Weight :"+ev.target.value);
        this.setState({
            weight: ev.target.value
        })
    }


    render(){
        return(
        <div className="row">
            <center><h1>BMI Calculator</h1></center>
            <div className="col m3"> </div>
            <div className="col m6">
                <p>Height: {this.state.height} Foot</p>
                <p>
                    <input type="range" value={this.state.height} min={0} max={8} step={0.1} onChange={this.handleHeight}/>
                </p>
                <p>Weight: {this.state.weight} KG</p>
                <p>
                    <input type="range" value={this.state.weight} min={0} max={100} step={0.1} onChange={this.handleWeight}/>
                </p>
                <div className="progress">
                    <div className="indeterminate"></div>
                </div>
                <div>
                    <p>test</p>
                </div>
            </div>
        </div>
        );
    }
}
