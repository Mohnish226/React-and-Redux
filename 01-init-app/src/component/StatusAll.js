import React,{Component} from "react";
import StatusList from "./Statuslist";

export default class StatusAll extends Component{
    constructor(props) {
        super(props);
        this.state = {
            newStatus: "",
            statuses: [
                "This is testList 1",
                "This is testList 2",
                "This is testList 3"
            ]
        }
        this.StatusUpdate = this.StatusUpdate.bind(this);
        this.HandleSubmit = this.HandleSubmit.bind(this);
        this.Delete = this.Delete(this);
    }

    StatusUpdate(ev){
        this.setState({newStatus: ev.target.value})
    }

    HandleSubmit(ev){
        // prevent from refreshing
        ev.preventDefault();
        //console.log(this.state.newStatus.trim() === "");
        if (this.state.newStatus.trim() === ""){
            return window.alert("Empty text")
        }
        let newStatus = [this.state.newStatus, ...this.state.statuses];
        this.setState({
            newStatus: "",
            statuses: newStatus
        })
    }

    Delete(index){
        console.log(index);
        let copy = [...this.state.statuses];
        copy.splice(index,1);
        this.setState({
            statuses: copy
        })
    }

    render() {
        return (
            <div className="Status">
                <div>
                <h2>Enter New Status</h2>
                <form onSubmit={this.HandleSubmit}>
                    <div className="row">
                        <div className="col s3"> </div>
                        <div className="input-field col s6">
                            <input type="text" value={this.state.newStatus} onChange={this.StatusUpdate} placeholder="Enter your text"/>
                        </div>
                    </div>
                    <button className="waves-effect waves-light btn" type="submit">Post Status</button>
                </form>
                </div>
                <hr/>
                <h3>Timeline</h3>
                <StatusList statuses={this.state.statuses} Delete={this.Delete}/>
            </div>
        );
    }
}