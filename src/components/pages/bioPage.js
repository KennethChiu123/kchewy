import React, { Component } from 'react';

import mainImage0 from './../../images/bio1.jpg';


class BioPage extends Component {
  render() {
        var biography = "Kurt was born in Baltimore in 1988 and grew up in New Jersey and Pennsylvania. He become involved in musical theater in high school and quickly developed a love of music and performance. He majored in mathematics in college, while developing his musical and technical abilities by creating content for his YouTube channel. In 2009, he created the production company NoodleHouse Studios. In 2011 he moved to Los Angeles, where he lives and works–composing, producing , performing, and directing."
    return (
            <div className="content-bio">
                <div className="container">
                    <div className="bioBlock1">
                        <div>
                            <div className="bioL">
                                <img src={mainImage0} alt="Bio Pic" />
                            </div>
                            <div className="bioR">
                                <div>
                                    <h3 className="bioTitle">About</h3>
                                </div>
                                <div>
                                    <p> {biography} </p>
                                </div>
                            </div>  
                        </div>  
                        <div className="bioBlock2">
                        </div>
                    <hr/>
                    </div>
                </div>
            </div>
    );
  }
}

export default BioPage;
