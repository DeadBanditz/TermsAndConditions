import React from "react";
import { Col, Container, Row } from "react-bootstrap";

//import CSS
import './faqmap.css';

//import Assets
import roadmap from '../../assets/Roadmap.mp4';

//import Component
import RoadMapItem from "./faqmapitem";
class RoadMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            roadmaps: [
                {
                    tag: '1',
                    title: "What are Dead Banditz?",
                    content: "Dead Banditz are a collection of 9999 unique western banditz that will live on the blockchain as a Non Fungible Token."
                },
                {
                    tag: 'Ever going (Early Q1 commencement)',
                    title: "When does minting go live, is there a Presale?",
                    content: "The public sale will take place on the 01/31/2022, starting at 7PM (GMT-5), the Pre-sale will take place on 01/29/2022 at 7PM (GMT-5) with our “GOLDEN TICKET” sale beginning at 6PM (GMT-5) on 01/29/2022."
                },
                {
                    tag: 'Q3 2022',
                    title: "How do I win the $2,000,000 USD worth of ETH giveaway?",
                    content: "To win this reward, you must purchase a minimum of 1 Dead Banditz NFT, 1 Dead Banditz NFT is one chance to be rewarded with $2,000,000USD worth of ETH. The 1 lucky holder of the Legendary Dead Bandit at the time of the reveal will need to contact us via Discord and be able to verify the address of their wallet for this Dead Banditz NFT and verify wallet address to receive the prize money, once verified the holder will be paid $2,000,000 USD worth of ETH, this promotion is available to all holders worldwide."
                },
                {
                    tag: 'Q4 2022',
                    title: "How much will each Dead Bandit cost?",
                    content: "The price is 0.3 ETH + gas."
                },
                {
                    tag: 'Q4 2022',
                    title: "How much will Royalties be?",
                    content: "Royalties will be 10% (Dead Banditz) + 2.5 % (Opeansea) for a total of 12.5%. This is to try and deter any flippers early on. 1 week after the reveal event, the royalties will move to 7.5% (Dead Banditz) + 2.5% (Opensea) for a total of 10%. 4% of our royalties from each sale will be put back into the community fund to continue funding giveaways and exclusive events."
                },
                {
                    tag: 'Q4 2022',
                    title: "How many can I buy at once?",
                    content: "If you are an OG member (150 members ony) your golden ticket will allow you to MINT 5 Dead Banditz with a wallet maximum of 20 Dead Banditz during your 1-hour early access sale. If you are lucky enough to receive a white ticket you will be able to 10 Dead Banditz per transaction with a maximum of 50 per wallet. During public sale, there will be a maximum of 25 Dead Banditz per transaction with a wallet limit of 100. Our $2,000,000 USD ETH reward is sure to change someones life, so do not miss the opportunity to take advantage of this."
                },
                {
                    tag: 'Q4 2022',
                    title: "What is an O.G Mint pass & other passes?",
                    content: "The OG Golden Ticket will be rewarded to the first 150 members to join the discord server.",
                    content2: "The holder of an OG Golden Ticket will have 1-hour early access to pre-sale. If are receive a White Ticket you will gain access to our pre-sale event, being rewarded a White Ticket is quite easy, all you need to do is achieve level 10 on our discord server and to get there all you need to do is invite 10 people and have them join the discord."                    
                },
                {
                    tag: 'Q4 2022',
                    title: "How many Dead Banditz are there? will you be holding any?",
                    content: "There will be 9999 Dead Banditz in total, 9888 will be available. We will be holding 111 Dead Banditz to give to friends/family, rewards for community members and for giveaways."
                },
                {
                    tag: 'Q4 2022',
                    title: "Will I see my Dead Banditz NFT straight after I purchase from your website?",
                    content: "No, all the Dead Banditz will be revealed 48 hours after the public sale, that means the Dead Banditz will be visible on the 02/02/2022 @ 7PM (GMT-5)."
                },
                {
                    tag: 'Q4 2022',
                    title: "Why would I buy a Dead Banditz NFT anyway?",
                    content: "Buying a Dead Banditz NFT, will give you access to our exclusive GOLDEN GUNS channel in our discord server, this invite will give you an opportunity to receive a daily reward for simply holding your Dead Bandit.",
                    content2: "We will being giving away $1,000,000 USD worth of ETH over the 365 days which is $2,740 USD worth of ETH per day.",
                    content3: "We will reward this by our giveaway bot randomly generating your NFT number, it will range between 1-9999.",
                    content4: "You will be contacted by a team member to verify ownership then payment will be made instantly after verification, you will have 1 week to verify otherwise payment stays in community fund.",
                    content5: "To receive a payout, you MUST own a minimum of 1 Dead Banditz NFT."
                },
                {
                    tag: 'Q4 2022',
                    title: "What rights do I have to my Dead Banditz NFT?",
                    content: "You own your Dead Banditz NFT and have full commercial rights to your NFT. You can do whatever you like with it for as long as you own the NFT. You could create and sell merch, you can create derivatives. The only thing you don't have the rights to is the Dead Banditz or Dead Societies branding and logo."
                },
                {
                    tag: 'Q4 2022',
                    title: "What am I buying exactly?",
                    content: "You are buying a Dead Banditz NFT. (1 randomly generated PNG). That is what you are buying when you spend the 0.3 ETH + gas. Nothing more. The team is free to do what we like with the money received. There is no guarantee of any future utility after the 1st 365 days. At our sole discretion, we may decide to do some cool stuff with the funds, which may include exclusive parties, giveaways, games and competitions."
                }
            ]
        }
    }

    render() {
        return (
            <div className='roadmap-control' id='roadmap' style={{ backgroundColor: "black", backgroundImage: "none" }}>
                <Container style={{ backgroundColor: "black", paddingTop: 100 }}>
                    <header style={{fontStyle: "normal", color:"white", textAlign: "center" }}><span></span> <br/> FAQ's</header>
                    <Row style={{ paddingTop: 0}}>
                        <Col>
                            {
                                this.state.roadmaps.map((item, index) => {
                                    return (
                                        <RoadMapItem style={{ color: "black" }} key={index}
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