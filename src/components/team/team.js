import React from "react";
import { Row, Col, Container } from "react-bootstrap";

//import CSS
import './team.css';

//import image assets
import CEOImage from '../../assets/team/dicklogo.png';
import CTOImage from '../../assets/team/cto.jpeg';
import CMOImage from '../../assets/team/cmo.jpeg';
import CFOImage from '../../assets/team/cfo.jpeg'

//import Component
import TeamMember from "./teammember";
class Team extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            teams: [
                {
                    image: CEOImage,
                    title: 'Founder',
                    name: "JENFASSINO"
                },
            ]
        }
    }

    render() {
        return (
            <div className='team-control' id='team'>
                <Container style={{ textAlign: "center" }}>
                    <header><span>OUR</span> FOUNDER</header>
                    <Row>
                        {
                            this.state.teams.map((item, index) => {
                                return (
                                    <div>
                                        <TeamMember 
                                        key={index}
                                            imageUrl={item.image}
                                            title={item.title}
                                            name={item.name} />
                                        <Col style={{fontSize: 30}}>
                                            Dick Pix was
                                            conceived and
                                            developed by Jen Fassino,
                                            a comedy podcaster at Jen AF
                                            and hairstylist with an extensive
                                            resume in the hair industry.
                                            Now, she's apparently dubbed 
                                            in her NFT community as the 
                                            "Queen of Dicks." You might know her
                                             best as 
                                             <a href="https://instagram.com/jenfassino" style={{textDecoration: "none", color:"white", fontWeight: "bold"}}>@jenfassino</a> on Instagram.
                                        </Col>
                                    </div>
                                );
                            })
                        }
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Team