import React, { Component } from 'react';

import fbImage from './../../images/social-fb.png';
import igImage from './../../images/social-instagram.png';
import twImage from './../../images/social-twitter.png';
import ytImage from './../../images/social-youtube.png';
import spImage from './../../images/social-spotify.png';



class Footer extends Component {
  render() {
    return (
        <footer>
            <nav>
                <ul> 
                    <li className= "first">
                        <a href="https://www.facebook.com/christophemcwhorterphotography/" > 
                            <div>
                                <img src={fbImage} alt="Facebook" className="social-button" />
                            </div> 
                        </a>
                    </li>

                    <li>
                        <a href="https://twitter.com/#!/nickyzeph" > 
                            <div>
                                <img src={twImage} alt="Twitter" className="social-button" />
                            </div> 
                        </a>
                    </li>
                    <li>
                        <a href="http://www.youtube.com/user/amandacarsonmusic" > 
                            <div>
                                <img src={ytImage} alt="Youtube" className="social-button" />
                            </div> 
                        </a>
                    </li>
                    <li>
                        <a href="http://instagram.com/amandaonthemoon" > 
                            <div>
                                <img src={igImage} alt="Instagram" className="social-button" />
                            </div> 
                        </a>
                    </li>
                    <li className= "last">
                        <a href="https://play.spotify.com/artist/2BHswvFd8tMBizVWGcAMLm" > 
                            <div>
                                <img src={spImage} alt="Spotify" className="social-button" />
                            </div> 
                        </a>
                    </li>
                </ul>
            </nav>

        </footer>

    );
  }
}

export default Footer;
