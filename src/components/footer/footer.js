import React from "react";
import { Container } from "react-bootstrap";

//import CSS
import './footer.css';

//import social icons
import {
    BsTwitter,
    BsDiscord,
    BsInstagram
} from 'react-icons/bs';
class Footer extends React.Component {
    render() {
        return (
            <div className='footer-control' id="socials">
                <Container className='footer'>
                    <p><a target="_blank" rel="noopener noreferrer" href="https://deadbanditz.io/" style={{ textDecoration: "none", color: "#E8B331", textAlign: "left" }}> <text className="banditz">© 2021 Dead Banditz, a Dead Societies Project. All Rights Reserved</text>
                    </a></p>
                    <p><a target="_blank" rel="noopener noreferrer" href="https://deadbanditz.github.io/TermsAndConditions/" style={{ textDecoration: "none", color: "#E8B331", textAlign: "left" }}> <text className="banditz">Terms and Conditions</text>
                    </a></p>
                    <div>
                        {/* <a style={{textDecoration: "none", color:"white"}}target="_blank" rel="noopener noreferrer"href="https://instagram.com/"> <BsInstagram size={32} /></a>
                       <a style={{textDecoration: "none", color:"white"}}target="_blank" rel="noopener noreferrer"href="https://twitter.com/"> <BsTwitter size={32} /></a>
                       <a style={{textDecoration: "none", color:"white"}}target="_blank" rel="noopener noreferrer"href="https://discord.com/"> <BsDiscord size={32} />   </a>      */}


                        <p><a target="_blank" rel="noopener noreferrer" href="https://metaversesolutions.ai/" style={{ textDecoration: "none", color: "#E8B331", textAlign: "right" }}><text className="metaverse">Website by Metaverse Solutions, LLC</text></a></p>
                        
                    </div>
                </Container>
            </div>
        );
    }
}

export default Footer;