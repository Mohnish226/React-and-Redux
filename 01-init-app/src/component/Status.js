import React,{Component} from "react";

export default class Status extends Component{
    constructor(props){
        super(props);
        this.state = {
            likes: 0
        }
        this.like = this.like.bind(this);
        this.delete = this.delete.bind(this);
    }

    like(){
        //console.log("Likes");
        this.setState({
            likes: this.state.likes + 1
        })
    }

    delete(){
        console.log("Delete "+ this.props.del);
        //debugger
        this.props.Delete(this.props.id)
        //StatusAll.Delete(this.props.mytext.value)
    }

    render() {
        return (
            <div className="row">
                <div className="col m3"> </div>
                <div className="col s12 m6">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">{this.props.mytext}</span>
                        </div>
                        <div className="card-action">
                            <button onClick={this.delete}> Delete</button>
                            <button onClick={this.like}>{this.state.likes} likes</button>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}