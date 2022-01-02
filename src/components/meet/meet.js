import React from "react";
import { Container } from "react-bootstrap";

import InfiniteCarousel from 'react-leaf-carousel';

//import Assets
import ImageBoy1 from '../../assets/boys/boy1.png';
import ImageBoy2 from '../../assets/boys/boy2.png';
import ImageBoy3 from '../../assets/boys/boy3.png';
import ImageBoy4 from '../../assets/boys/boy4.png';
import ImageBoy5 from '../../assets/boys/boy5.png';
import ImageBoy6 from '../../assets/boys/boy6.png';
import ImageBoy7 from '../../assets/boys/boy7.png';
import ImageBoy8 from '../../assets/boys/boy8.png';
import ImageBoy9 from '../../assets/boys/boy9.png';
import ImageBoy10 from '../../assets/boys/boy10.png';
import ImageBoy11 from '../../assets/boys/boy11.png';

//import CSS
import './meet.css';

import {
    BsArrowLeftShort,
    BsArrowRightShort
} from 'react-icons/bs';
class Meet extends React.Component {
    render() {

        return (
            <div className='meet-control'>
                <Container>
                    <header style={{ textAlign: "center" }}>
                        WANTED: <br /><text style={{ color: "#E8B331" }}>THE LEGENDARY DEAD BANDITZ GANG</text><br /> <span style={{ color: "white" }}>DEAD OR ALIVE</span>
                    </header>
                </Container>
                <InfiniteCarousel
                    breakpoints={[
                        {
                            breakpoint: 500,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                autoplay: true,
                                autoplayScroll: 1,
                                autoplaySpeed: 2
                            },
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1,
                                autoplay: true,
                                autoplayScroll: 1,
                                autoplaySpeed: 2
                            },
                        },
                        {
                            breakpoint: 1280,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1,
                                autoplay: true,
                                autoplayScroll: 1,
                                autoplaySpeed: 2
                            },
                        },
                    ]}
                    dots={false}
                    arrows={true}
                    showSides={true}
                    sidesOpacity={0.5}
                    sideSize={0.1}
                    slidesToScroll={1}
                    slidesToShow={5}
                    scrollOnDevice={true}
                    autoplay={true}
                    autoplayScroll={1}
                    autoplaySpeed={2}

                >
                    <div>
                        <img className="caroImg" src={ImageBoy3} alt='boy1' />
                    </div>
                    <div>
                        <img className="caroImg" src={ImageBoy2} alt='boy2' />
                    </div>
                    <div>
                        <img className="caroImg" src={ImageBoy1} alt='boy3' />
                    </div>
                    <div>
                        <img className="caroImg" src={ImageBoy4} alt='boy4' />
                    </div>
                    <div>
                        <img className="caroImg" src={ImageBoy5} alt='boy5' />
                    </div>
                    <div>
                        <img className="caroImg" src={ImageBoy6} alt='boy5' />
                    </div>
                    <div>
                        <img className="caroImg" src={ImageBoy7} alt='boy5' />
                    </div>
                    <div>
                        <img className="caroImg" src={ImageBoy8} alt='boy5' />
                    </div>
                    <div>
                        <img className="caroImg" src={ImageBoy9} alt='boy5' />
                    </div>
                    <div>
                        <img className="caroImg" src={ImageBoy10} alt='boy5' />
                    </div>
                    <div>
                        <img className="caroImg" src={ImageBoy11} alt='boy5' />
                    </div>
                </InfiniteCarousel>

                {/* <Container>
                    <div className='slide-arrows'>
                        <a>
                            <BsArrowLeftShort size={40} />
                        </a>
                        <a>
                            <BsArrowRightShort size={40} />
                        </a>
                    </div>
                </Container> */}
                {/* <Container>
                    <div className='remaining'>
                        <span>0</span>
                        <p>SPOOKIES REMAINING</p>
                    </div>
                </Container> */}
            </div>

        );
    }
}

export default Meet;