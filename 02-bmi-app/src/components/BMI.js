import React, {Component} from 'react';


export default class BMI extends Component{
    constructor(props){
        super(props)
        this.state = {
            height: 5*12,
            weight: 30
        }

        this.handleHeight = this.handleHeight.bind(this);
        this.handleWeight = this.handleWeight.bind(this);
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

    displayBMI(){
        let bmi = ((this.state.weight)/(this.state.height*0.0254*0.0254*this.state.height))
        if(bmi < 18.9){
            return "Under Weight"
        }
        else if (bmi < 25.9){
            return "Normal"
        }
        else if (bmi > 25.9){
            return "Overweight"
        }
        return "Error"
    }

    displayText(){
        let bmi = ((this.state.weight)/(this.state.height*0.0254*0.0254*this.state.height))
        return <div>You have a BMI of : {Math.floor(bmi)}</div>
    }


    render(){
        return(
        <div className="row">
            <center><h1>BMI Calculator</h1></center>
            <div className="col m3"> </div>
            <div className="col m6">
                <p>Height: {this.state.height} Inches | {Math.floor(this.state.height/12)} Feet {this.state.height % 12} inches</p>
                <p>
                    <input type="range" value={this.state.height} min={0} max={8*12} step={1} onChange={this.handleHeight}/>
                </p>
                <p>Weight: {this.state.weight} KG</p>
                <p>
                    <input type="range" value={this.state.weight} min={0} max={100} step={0.1} onChange={this.handleWeight}/>
                </p>
                <div className="progress">
                    <div className="indeterminate"></div>
                </div>
                <div className="row">
                    <div className="col m3"></div>
                    <div className="col s12 m6">
                        <div className="card blue-grey darken-0">
                            <div className="card-content white-text">
                                <center> <span className="card-title">{this.displayBMI()}</span></center>
                                <p>{this.displayText()}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
