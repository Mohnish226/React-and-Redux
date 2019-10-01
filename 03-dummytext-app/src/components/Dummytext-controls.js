import React,{Component} from 'react';

export default class DummytextControl extends Component{

    constructor(props){
        super(props);
        this.state = {
            paragraphs: 2,
            useHTML: 0
        }

        this.getpara = this.getpara.bind(this);
        this.ishtml = this.ishtml.bind(this);
        this.gettext = this.gettext.bind(this);
        this.refresh = this.refresh.bind(this);
    }

    componentDidMount() {
        this.refresh();
    }

    getpara(ev){
        console.log(ev.target.value);
        this.setState({
            paragraphs: ev.target.value
        })
        this.gettext(ev.target.value,this.state.useHTML);
    }

    refresh(){
        this.gettext(this.state.paragraphs,this.state.useHTML)
    }

    ishtml(ev){
        //console.log(ev.target["value"]);
        let b = 0;
        let x = document.getElementById("test");
        //console.log(x.checked);
        if(x.checked){
           b = 1;
        }
        else{
            //console.log("Nice");
            b = 0;
        }
        //console.log(b);
        this.setState({
            useHTML: b
        });
        this.gettext(this.state.paragraphs,b);
    }

    gettext(para,html){
        let url1 = "https://baconipsum.com/api/?type=meat-and-filler&paras=";
        let url = Boolean(html) ? url1 + para + "&format=html"
                : url1 + para;

        console.log("paras is "+ para);

        console.log(url);
        fetch(url).then(function(response){
            return response.json();
        })
            .then(function (myJson) {
                //let text = JSON.stringify(myJson);
                //console.log(JSON.stringify(myJson))
                console.log(typeof myJson);
                if(Boolean(html)){
                    document.getElementById("data").innerHTML = myJson;
                    return
                }
                let text = "<p>";
                for (var i = 0; i < myJson.length; i++) {
                    text += myJson[i];
                    text += "</p>"
                }
                document.getElementById("data").innerHTML = text;
            })
        //let myObj = JSON.parse(this.responseText);
    }



    render() {
        return(
            <div>
                <div className="row">
                    Select Number of Paragraphs : {this.state.paragraphs}<br></br>
                    <input type="range" value={this.state.paragraphs} min={1} max={20} onChange={this.getpara}/>

                    <div className="col m10">
                        Include HTML ?
                        <div className="switch">
                            <label>
                                No
                                <input type="checkbox"  id="test" onChange={this.ishtml}/>
                                <span className="lever"></span>
                                Yes
                            </label>
                        </div>
                    </div>
                    <div className="col m2">
                        <a className="waves-effect waves-light btn" onClick={this.refresh}>Refresh</a>
                    </div>
                    <hr></hr>
                </div>
                <div className="row">
                    <div id="data"></div>
                </div>
            </div>
        )
    }
}