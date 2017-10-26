import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';

import mainImage0 from './../../images/Slide1.jpg';
import mainImage1 from './../../images/Slide2.jpg';
import mainImage2 from './../../images/Slide3.jpg';

class Homepage extends Component {
    render() {
        return (
            <div className="content">
                <div className="container">
                    <Carousel 
                        autoPlay={true} 
                        infiniteLoop={true}
                        showArrows={false} 
                        showStatus={false} 
                        showIndicators={false} 
                        >
                        <a href="https://www.yahoo.com/"> 
                            <div>
                                <img src={mainImage0} alt="Slide1"/>
                            </div> 
                        </a>
                        <a href="https://www.youtube.com/"> 
                            <div>
                                <img src={mainImage1} alt="Slide2"/>
                            </div>
                        </a>
                        <a href="https://www.aol.com/"> 
                            <div>
                                <img src={mainImage2} alt="Slide3"/>
                            </div>
                        </a>
                    </Carousel>
                </div>
            </div>
        );
    }
};

export default Homepage;
