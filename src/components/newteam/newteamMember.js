import React from "react";

import "./newteamMember.css";

import { BsTwitch} from "react-icons/bs"
class TeamMember extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="teamMember-layout " style={{textAlign: "center", marginBottom: 30, border: "solid black 10px", borderRadius: 20, padding: 10, backgroundColor: "black"}}>
                <div className="teamMember-text">
                    <div>
                    <div className="g-flex-justify-center">
                        <img src={this.props.img} className="teamMember-image"></img>
                    </div>
                        <div className="teamMember-title">
                            <h3>{this.props.title}</h3>
                        </div>
                        <div className="teamMember-title">
                            
                            <h3 style={{fontSize: 20}}>{this.props.job}</h3>
                            
                        </div>
                        {/* <div className="g-text-base">
                            <p className="g-text-gray-400" style={{color: "white"}}>
                                <text className="newThing" style={{fontSize: 16}}>BIO:  <br/></text> {'   ' + this.props.des}
                            </p>
                            <p className="g-text-gray-400" style={{color: "white"}}>
                                <text className="newThing" style={{fontSize: 16}}>SPECIAL SKILLS:  <br/></text> {'   ' + this.props.skills}
                            </p>
                            <p className="g-text-gray-400" style={{color: "white"}}>
                                <text className="newThing" style={{fontSize: 16}}>FAVORITE PLANET:  <br/></text> {'   ' + this.props.planet}
                            </p>
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default TeamMember;