import React from "react";
import { Col, Container, Row } from "react-bootstrap";

//import CSS
import './roadmap.css';
import NewRoadMap from '../newroadmap/newroadmap';

//import Assets
import roadmap from '../../assets/Roadmap.mp4';

//import Component
import RoadMapItem from "./roadmapitem";
class RoadMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            roadmaps: [
                {
                    tag: '0%',
                    title: "The Curse of the Dead Banditz",
                    content: "Join our discord server, as we will be giving away 5 Dead Banditz on reveal, even if you don’t mint, you will still be entitled to this giveaway, all you need to do is be a level 10 member of discord, which is achieved by inviting 10 people to our discord. The 5 Dead Banditz will be given away once our public sale sells out."
                },
                {
                    tag: '20%',
                    title: "Bounty for The Legendary Dead Banditz",
                    content: "The Dead Banditz gang will be giving away a total of $3,150,000 USD worth of ETH.",
                    content2: "When 9999 Dead Banditz are sold in the collection we will be giving away $2,150,000 USD worth of ETH on reveal.",
                    content3: "$2,000,000 USD worth of ETH will be rewarded to the minter who gets 1/1 Golden Gunz Gill.",
                    content4: "In addition to this giveaway we will be also giving away $150,000 USD worth of ETH to 10 minters who receive 1 of the 10 Legendary Dead Banditz.",
                    content5: "These legends are a unique collection of 11 individually created NFTs. The remaining $1,000,000 USD worth of ETH will be given away daily for the next 365 days, equalling $2,740 USD worth of ETH per day. This will be given away in the exclusive Golden Gunz channel on our discord server."
                },
                {
                    tag: '30%',
                    title: "Charity Giveaway",
                    content: "The Dead Banditz gang will be donating a minimum of $20,000USD to one of 5 charities that are being polled in our discord server, please go take your vote and we will be paying the $20,000USD to the winning charity on reveal day."
                },
                {
                    tag: '40%',
                    title: "Exclusive Discord Access",
                    content: "Golden Gunz: This exclusive channel in discord will only be available to the holders of a Dead Banditz NFT, here you will have exclusive access to virtual events, exclusive $DSG ICO offers and access to giveaways of NFTs and ETH rewards."
                },
                {
                    tag: '60%',
                    title: "Culture Kit",
                    content: "Dead Banditz Merch launch. We will be giving away 11 Dead Banditz Merch packs to the minters of the 11 Legendary Dead Banditz, this pack will contain 1 x Hoody, 1 x T- Shirt, 1 x Trucker Hat and an exclusive branded sticker pack, we will be shipping these kits to winners around the world completely free of charge."
                },
                {
                    tag: '80%',
                    title: "Global VIP Recognition",
                    content: "We will be advertising a selection of our 10 favourite Dead Banditz in 3 Locations. When the collection is released into the advertising streams, we will be holding an exclusive shootout event for all Dead Banditz holders in these locations, if your NFT is selected as a favourite you will be invited to these events with an expense paid trip to any of the mentioned locations. Your Dead Bandit will be your exclusive invite to these events."
                },
                {
                    tag: '100%',
                    title: "A Legend Never Dies",
                    content: "Phase 2 will begin development.",
                    content2: "Our 4-stage collection will be a different concept to phase-1 but will be built around Dead Societies and will play a huge role in the creation of our game development. Phase-2 will help increase daily giveaway bonuses and each holder of a Phase-1 Dead Banditz NFT, will receive a discounted mint price for Phase-2."
                }
            ]
        }
    }

    render() {
        return (
            <div className='roadmap-control' id='roadmap' style={{ paddingTop: 50, paddingBottom: 50 }}>
                <Container style={{ backgroundColor: "black", padding: 30, border: "solid #E8B331 10px", borderRadius: 20, textAlign: "center" }}>
                    <header style={{ fontWeight: 900, color: "#E8B331" }}><span>DEAD BANDITZ</span> <br /> ROADMAP</header>
                    <p className='roadmap-description'>
                        Welcome to the Dead Banditz Community.<br />Now that you have jumped on the wagon, strap in for a life changing ride!
                    </p>
                    {/* <img  className="roadimage"style={{border:"solid 5px black", borderRadius: 20}}src="https://github.com/DeadBanditz/banditzsite/blob/main/src/assets/wood.png?raw=true" /> */}
                    <Row style={{ paddingTop: 30}}>
                        <Col style={{ color: "white"}}>
                            {
                                this.state.roadmaps.map((item, index) => {
                                    return (
                                        <RoadMapItem style={{color: "black" }} key={index}
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
                    <NewRoadMap />
                </Container>
            </div>

        );
    }
}

export default RoadMap;