import React, { Component } from 'react';
import Slider from 'react-slick'
import {
  Link
} from 'react-router-dom';


import mainImage0 from './../../images/mainImage.jpg';
import mainImage1 from './../../images/mainImage2.jpg';
import mainImage2 from './../../images/mainImage3.jpeg';

class Homepage extends Component {
    render() {      
        var settings = {
          //dots: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay:true,
          autoplaySpeed: 5500,
          swipeToSlide: true,
          adaptiveHeight:true,
          pauseOnHover:true,
        };
        return (
            <div className="content">
              <div className="container">
                <Slider {...settings}>
                    <div>
                        <a href="https://www.yahoo.com/"> 
                            <img src={mainImage0} />
                        </a>
                    </div>

                    <div>
                        <a href="https://www.youtube.com/"> 
                            <img src={mainImage1} />
                        </a>
                    </div>

                    <div>
                        <a href="https://www.aol.com/"> 
                            <img src={mainImage2} />
                        </a>
                    </div>

                    <div>
                        <a href="https://www.amazon.com/"> 
                            <img src='https://yt3.ggpht.com/-TqFzMDgTa64/AAAAAAAAAAI/AAAAAAAAAAA/keg7BdguTLg/s900-c-k-no-mo-rj-c0xffffff/photo.jpg' />
                        </a>
                    </div>
                </Slider>
              </div>
            </div>
        );
    }
}   

export default Homepage;
