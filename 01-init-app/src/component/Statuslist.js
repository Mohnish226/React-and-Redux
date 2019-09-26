import React,{Component} from "react";
import Status from "./Status";

export default class StatusList extends Component{
    render() {
        return (
            console.log(this.props.Delete),
            this.props.statuses.map((statusText,index) =>{
                return <Status key={index}  id={index} mytext={statusText} Delete={this.props.Delete}/>
            })
        );
    }
}