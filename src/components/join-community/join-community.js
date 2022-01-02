import React from "react";
import { Container } from "react-bootstrap";

//import Components
import YButton from "../basic/YButton";

//import CSS
import './join-community.css';
class JoinCommunity extends React.Component {
    render() {
        return (
            <div className='join-community-control' id="whitelist">
                <Container style={{textAlign: "center"}}>
                    <div style={{backgroundColor: "#FF9859", border: "10px solid black", padding:10, borderRadius: 20, margin: 10}}>
                        <h1><span>YOU'VE GOT </span> JUNK MAIL</h1>
                        <p style={{fontWeight: 900}}> Join our Junk Mail newsletter to stay up to date with the Dick Pix community. We wouldn't want you getting blue balls. </p>
                    </div>
                    <a href="https://forms.gle/2kSmjoTAefDWWyMA6"><YButton text='JUNK MAIL' /></a>
                </Container>
            </div>
        );
    }
}

export default JoinCommunity;