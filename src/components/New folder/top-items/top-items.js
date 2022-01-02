import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import YButton from "../basic/YButton";

//import CSS
import './top-items.css';

//import Assets
import Item1 from '../../assets/topitems/item1.png';
import Item2 from '../../assets/topitems/item2.png';
import Item3 from '../../assets/topitems/item3.png';

//import Component
import TopItem from "./top-item";

class TopItems extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            topItems: [
                {
                    image: Item1,
                    name: "COMING SOON",
                    price: '130 ETH',
                    highestBid: 'A LOT OF ETH'
                },
                {
                    image: Item2,
                    name: "COMING SOON",
                    price: '130 ETH',
                    highestBid: 'A LOT OF ETH'
                },
                {
                    image: Item3,
                    name: "COMING SOON",
                    price: '130 ETH',
                    highestBid: 'A LOT OF ETH'
                }
            ]
        }
    }

    render() {
        return (
            <div className='top-items-control' id="faq">
                <Container style={{ textAlign: "center", maxWidth: 800 }}>
                    <h1 style={{ color: "white" }}>FAQ</h1>
                    <div style={{ textAlign: "left" }}>
                        <h2 style={{ color: "white" }}>What is an NFT?</h2>
                        <p style={{ color: "lightblue" }}>NFT stands for non-fungible token, it is a digital asset that represents
                            real-world objects like art, music, in-game items and videos. They are
                            bought and sold online, frequently with cryptocurrency, and they are generally
                            encoded with the same underlying software as many cryptos. </p>

                        <h2 style={{ color: "white" }}>What is the Metaverse? </h2>
                        <p style={{ color: "lightblue" }}>The Metaverse refers to a shared virtual experience where land, avatars and names can be bought and sold, often using cryptocurrency. </p>

                        <h2 style={{ color: "white" }}>Who is Jack Frost? </h2>
                        <p style={{ color: "lightblue" }}>Jack Frost is an Alien DJ and Beatmaker from a distant planet.  His ship crashed on Earth and he decided to stay a while.
                            <br />
                            Jack is very well-respected in the Los Angeles music scene, and has production credits with major artists such as Pusha T and the Wu Tang Clan.
                            <br />
                            Jack is currently building “Area 51”, an immersive space themed nightclub entertainment experience inside the Metaverse.
                        </p>

                        <h2 style={{ color: "white" }}>What is Area 51?</h2>
                        <p style={{ color: "lightblue" }}>Area 51 is the name of the new album from Jack Frost.  It is also the name of the Exclusive Social Club you are joining when you purchase your Area 51 Space Pass NFT. We are building an immersive entertainment experience inside the Metaverse</p>

                        <h2 style={{ color: "white" }}>What is the Area 51 Space Pass NFT?</h2>
                        <p style={{ color: "lightblue" }}>The Area 51 Space Pass NFT’s are a collection of 4,200 non-fungible music and art collectibles living on the Ethereum blockchain. These super-rare NFT’s are a revolutionary combination of music NFT, PFP, and utility NFT in one.<br /><br />

                            8 Different Planets In Our Solar System<br />
                            8 Different Exclusive Unreleased Songs<br />
                            8 Different 3D Metaverse Avatars<br />
                            4200 Unique Collectible Music & Art NFT’s
                        </p>

                        <h2 style={{ color: "white" }}>What is the utility of the Area 51 Space Pass NFT?</h2>
                        <p style={{ color: "lightblue" }}>This is a collectible Music & Art NFT with some serious utility:<br />

                            - Exclusive Access to the Area 51 Music Album<br />
                            - Exclusive Access to Jack Frost Music Videos & NFT Airdrops<br />
                            - Exclusive Access to Area 51 Social Club<br />
                            - Exclusive Access to Augmented Reality Experience<br />
                            - Ownership of an Incredibly Rare Collectible Music & Art NFT<br />
                            - Royalty Free Licensing Rights for the Music and Art<br />
                            - A 3D Avatar Profile Pic for Social Media
                        </p>

                        <h2 style={{ color: "white" }}>Where Do I Buy My Area 51 Space Pass NFT?</h2>
                        <p style={{ color: "lightblue" }}>Area 51 NFT’s will be available to mint in December 2021 on our website. We will post the details ahead of time on our Discord and Twitter. After the mint window has closed, you will be able to trade Area 51 Space Pass NFT’s on OpenSea.io.</p>

                        <h2 style={{ color: "white" }}>When Can I Mint?</h2>
                        <p style={{ color: "lightblue" }}>Exclusive Whitelist Presale December 17th.
                            Public Sale the following day December 18th.
                        </p>

                        <h2 style={{ color: "white" }}>How Do I Mint My Area 51 Space Pass NFT?</h2>
                        <p style={{ color: "lightblue" }}>
                            1. Download MetaMask Wallet<br />
                            2. Add Ethereum to MetaMask Wallet<br />
                            3. Visit www.spacepass.io<br />
                            4. “Connect Wallet”<br />
                            5. “Mint” and select quantity (max 8 per transaction, 16 total per wallet)<br />
                            6. Visit OpenSea to View Collection
                        </p>

                        <h2 style={{ color: "white" }}>What is the Cost To Mint?</h2>
                        <p style={{ color: "lightblue" }}>Each Area 51 Space Pass NFT will cost 0.069 ETH (Ethereum Cryptocurrency)</p>

                        <h2 style={{ color: "white" }}>How Many Can I Mint?</h2>
                        <p style={{ color: "lightblue" }}>There is a max of 8 Area 51 Space Pass NFT’s per transaction.</p>

                        <h2 style={{ color: "white" }}>What is the Max Per Wallet?</h2>
                        <p style={{ color: "lightblue" }}>There is a max of 16 Area 51 Space Pass NFT’s per wallet.</p>

                        <h2 style={{ color: "white" }}>What is the Total Supply of Area 51 Space Pass NFT’s?</h2>
                        <p style={{ color: "lightblue" }}>There is a total supply of 4,200 Area 51 Space Pass NFT’s.</p>

                        <h2 style={{ color: "white" }}>What Happens On Pre-Sale Mint Day?</h2>
                        <p style={{ color: "lightblue" }}>
                            Exclusive Pre-Sale Date 12/17<br />
                            Whitelisters ONLY will mint their Area 51 Space Pass NFT’s<br />
                            These are all “un-revealed” NFT”s<br />
                            Whitelisted wallets have 24 hours to mint<br />
                            Price: 0.069 ETH per NFT<br />
                        </p>

                        <h2 style={{ color: "white" }}>When is the reveal?</h2>
                        <p style={{ color: "lightblue" }}>
                            3 days after mint.
                        </p>

                        <h2 style={{ color: "white" }}>Why wait for reveal?  </h2>
                        <p style={{ color: "lightblue" }}>
                        This is a complex NFT drop and we need to make sure all the NFT’s are of the highest quality (all the art and the songs need to be quality checked).
                        </p>

                        <h2 style={{ color: "white" }}>How Do I Access The Private Club?</h2>
                        <p style={{ color: "lightblue" }}>
                        Once you have an Area 51 Space Pass NFT, you will be able to join the Club.  You will need to verify Area 51 Space Pass NFT ownership. More details will be posted in the Discord server.
                        </p>

                        <h2 style={{ color: "white" }}>When is the Metaverse Wearables AirDrop?</h2>
                        <p style={{ color: "lightblue" }}>
                        We will be airdropping digital Metaverse wearables in Q1 2022.
                        </p>

                        <h2 style={{ color: "white" }}>Who is eligible for the airdrop?</h2>
                        <p style={{ color: "lightblue" }}>
                        All current holders of the Area 51 NFT’s will be eligible for the airdrop.  There will be a planned snapshot in December at which time the wallet addresses will be collected.
                        </p>

                        <h2 style={{ color: "white" }}>Will I be able to wear my Area 51 NFT in the Metaverse?  </h2>
                        <p style={{ color: "lightblue" }}>
                        Not immediately in Phase 1. The Metaverse wearables airdrop for holders is coming very soon after mint.
                        </p>
                    </div>
                </Container>
            </div>
        );
    }
}

export default TopItems