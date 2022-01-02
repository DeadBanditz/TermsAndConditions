import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import AboutGif from "../../assets/Collection_GIF.gif";
import YButton from "../basic/YButton";

//import CSS
import "./about.css";
class About extends React.Component {
  render() {
    return (
      <div id="about" className="about-control">
        <Container>
          <Row>
            {/* <Col md={6} xs={12} className="about-description"> */}
              <header style={{ color: "#E8B331" }}>
                <div style={{textAlign: "center"}}><span style={{ color: "white", textAlign: "center", fontSize: 30 }}>Terms and Conditions</span></div>
                {/* <span style={{color: "white"}}>1</span> GAME. */}
              </header>
              <p style={{ color: "white" }}>
                The Dead Banditz collection is a unique collection of artwork
                consisting of western styled bandits, based on the Ethereum
                blockchain via non fungible tokens (NFTs) brought to life by
                Dead Societies PTY LTD. www.deadbanditz.io is only a visual
                interface which allows users to acquire the digital collection
                of generated JPEGs.
                <br/><br/>
                Users take sole responsibilities for the
                correct management and financial welfare of their own Ethereum
                wallets and validating all transactions and contracts relating
                to and developed by www.deadbanditz.io before approval and
                transfer of NFTs. Please be aware that since the Dead Banditz
                smart contract runs via the Ethereum network, it is not possible
                to reverse, change, refund, undo or restore any transactions
                completed by users outside of the dead banditz team.
                <br/><br/>
                deadbanditz.io and its connected services are provided “as is”
                and “as available” without warranty of any kind, by using
                deadbanditz.io you are accepting sole responsibility for any and
                all transactions involving Dead Banditz digital artworks.
                <br/><br/>
                <div style={{textAlign: "center"}}><span style={{ color: "white", textAlign: "center", fontSize: 30 }}>Ownership</span></div>
                (i) The user that is buying and minting our Dead
                Banditz artwork is the owner of the Non Fungible Token (NFT)
                created by validating the transaction. Each Dead Banditz NFT
                will remain on the Ethereum blockchain. Once you have purchased
                a Dead Banditz NFT, you will own all the rights to the
                underlying Dead Bandit, ownership of the NFT is mediated
                entirely and only the Smart Contract and the Ethereum Network,
                this mean that, at no point may we seize, freeze or otherwise
                modify the ownership of ANY Dead Banditz NFT. 
                <br/><br/>
                (ii) Personal use,
                subject to your continued compliance with all of these terms,
                DeadBanditz.io grants you a worldwide, licence to use, copy and
                display the minted Dead Banditz, along with any extensions that
                you choose to create or use, solely for the following purposes:
                (a) your own personal, non-commercial use; (b) as part of a
                marketplace that permits the purchase and sale of your Dead
                Banditz NFT, provided that the marketplace cryptographically
                verifies each Dead Banditz owner’s right to display the Dead
                Banditz NFT and ensures that only the actual owner can display
                the Dead Banditz NFT; or (c) as part of a third party website or
                application that permits the inclusion, involvement, or
                participation of your Dead Banditz NFT, provided that the
                website/application cryptographically verifies each Dead Banditz
                NFT the owners rights to display the Dead Banditz NFT and
                ensures that only the actual owner can display the Dead Banditz
                NFT, and provided that the Dead Banditz NFT is no longer visible
                once the owner of the Dead Banditz NFT leaves the
                website/application 
                <br/><br/>
                (iii) Commercial use. Subject to your
                continued compliance with these Terms, DeadBanditz.io grants you
                an unlimited, worldwide licence to use, copy, and display the
                purchased Dead Banditz NFT for the purpose of creating
                derivative works based upon the Dead Banditz (“Commercial Use”).
                Examples of such Commercial Use would be the use of the Dead
                Banditz NFT to produce and sell merchandise products (Hooded
                Jumpers etc.) displaying copies of the Dead Banditz NFT, for the
                sake of clarification, nothing in this section will be deemed to
                restrict you from (a) owning or operating a marketplace that
                permits the use and sale of Dead Banditz generally, provided
                that the marketplace cryptographically verifies each Dead
                Banditz owner’s rights to display the Dead Banditz NFT and
                ensures that only the actual owner can display the Dead Banditz
                NFT; (ii) owning or operating a third party website or
                application that permits the inclusion, involvement, or
                participation of Dead Banditz NFTs generally, provided that the
                third party website or application cryptographically verifies
                each Dead Banditz NFT owner’s rights to display the Dead Banditz
                NFT and ensures that only the actual owner can display the Dead
                Banditz NFT, and provided that the Dead Banditz NFT is no longer
                visible once the owner of the purchased Dead Banditz NFT owner
                leaves the website/application; or (iii) earning revenue from
                any of the foregoing. 
                <br/><br/>
                <div style={{textAlign: "center"}}><span style={{ color: "white", textAlign: "center", fontSize: 30 }}>$2,000,000 USD Worth of ETH PROMOTION</span></div> When
                you mint a Dead Bandit, you will automatically get the chance to
                win $2,000,000USD worth of ETH. The winner will be decided by
                the reveal of our 1/1 Dead Banditz NFT, this particular NFT will
                be clearly advertised on our website and will be advertised as
                Golden Gunz Gill, the $2,000,000USD worth of ETH will be
                transacted to holder who holds the NFT at reveal, the winner
                will also receive a free Dead Banditz merchandise pack, which
                consists of 1 x Hoodie 1 x T-shirt 1 x Hat and 1 x stickers
                pack, along with the ownership of the 1/1 Golden Gunz Gill. 1
                minted Dead Banditz NFT will equal to 1 chance of winning the
                prize money of $2,000,000USD worth of ETH. We reserve the right
                to pay the $2,000,000USD worth of ETH if the collection isn’t
                sold out, and will only pay if the collection sells out within
                48 hours . There is no limitation on where the money will be
                paid to, you will receive $2,000,000USD worth of ETH, even if
                you local currency is valued higher or lower at the time of
                promotions end. The winner will only be paid the prize money
                after providing the Dead Banditz team their MetaMask wallet
                address. 
                <br/><br/>
                To enter our giveaways, you can also send an email to
                shoot@deadbanditz.io stating the giveaway that you want to end
                and your discord id.
              </p>

              {/* <div><YButton text='COMING SOON' /></div> */}
            {/* </Col> */}
            {/* <Col md={6} xs={12} className="image-control">
              <img
                style={{ border: "solid black 10px", borderRadius: 20 }}
                src={AboutGif}
                alt="about gif"
              />
            </Col> */}
          </Row>
        </Container>
      </div>
    );
  }
}

export default About;
