import React from "react";
import { Col, Container, Row } from "react-bootstrap";

//import CSS
import './newroadmap.css';

//import Assets
import roadmap from '../../assets/Roadmap.mp4';

//import Component
import RoadMapItem from "./newroadmapitem";
class RoadMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            roadmaps: [
                {
                    tag: 'Ever Going',
                    title: "The Societies Voice",
                    content: "We want to guarantee that your voice will be heard and will make a difference, as an established company we are here for the individual’s investing in our NFT projects and players that dive into our world of play.",
                    content2: "Dead Societies will hold regular open discussions via discord with virtual meetings for holders to join and have their say on ways to increase the longevity of their investment, future projects and to improve the Dead Banditz community."
                },
                {
                    tag: 'Q1 2022',
                    title: "Banditz Worldwide",
                    content: "Having already invested over $100,000 into marketing strategies for intial launch sale, we are planning to continue injecting money into further campaigns to maintain momentum with the Dead Banditz community.",
                    content2: "We want to ensure your investment prospers with time, the best way for us to do this is by worldwide marketing & promotional strategies, this will include advertising a select collection of Dead Banditz in some the world’s most influential cities with exclusive events for holders in these locations."
                },
                {
                    tag: 'Q2 2022',
                    title: "Exclusive Shootout Events",
                    content: "When advertising collections around the world, the Dead Societies team will host exclusive fully funded events that will only be accessible to holders of a Dead Banditz NFT, your NFT will be your ticket to these events."
                },
                {
                    tag: 'Q3 2022',
                    title: "Dead Societies Gold ($DSG)",
                    content: "We have already created our own currency which identifies as Dead Societies Gold ($DSG). It will be utilised as a play to earn reward.",
                    content2: "We are locking most of this currency until late Q2 and early Q3 2022, we will have and exclusive ICO for all Dead Banditz discord members, further information relating this ICO will be provided Q2 2022."
                },
                {
                    tag: 'Q4 2022',
                    title: "Dead Societies (Game Dev)",
                    content: "We are designing an immersive game that will bring you closer to your NFT like never before, it will reward players with $DSG and will challenge skill, patience and how quick on the trigger you can be, with features like looting, attacking and raiding towns with your band of banditz to increase playable ability and content. Successfully completing world events will reward higher amounts of $DSG and rarer loot pieces for the band of bandits or individual players."
                }
            ]
        }
    }

    render() {
        return (
            <div className='roadmap-control' id='roadmap' style={{ textAlign: "center" }}>
                <Container style={{ backgroundColor: "black", paddingTop: 100 }}>
                    <header style={{ fontWeight: 900, color:"#E8B331" }}><span>DEVELOPMENT</span> <br/> ROADMAP</header>
                    <p className='roadmap-description'>
                    Our number 1 priority is to ensure that your investment has a highly profitable return, for us to do so we are going to implement several strategies before and after launch in order to increase the floor price and exposure of your exclusive digital art piece.
                    </p>
                    {/* <img  className="roadimage"style={{border:"solid 5px black", borderRadius: 20}}src="https://github.com/DeadBanditz/banditzsite/blob/main/src/assets/wood.png?raw=true" /> */}
                    <Row style={{ paddingTop: 30, alignContent: "center", justifyContent: "center", textAlign: "center" }}>
                        <Col style={{ color: "white", alignContent: "center", justifyContent: "center", textAlign: "center" }}>
                            {
                                this.state.roadmaps.map((item, index) => {
                                    return (
                                        <RoadMapItem style={{ textAlign: "center", color: "black" }} key={index}
                                            tag={item.tag}
                                            title={item.title}
                                            content={item.content}
                                            content2={item.content2}
                                            content3={item.content3}
                                            content4={item.content4}
                                            content5={item.content5}
                                            content6={item.content6}
                                             />
                                    );
                                })
                            }
                        </Col>
                    </Row>
                </Container>
            </div>

        );
    }
}

export default RoadMap;