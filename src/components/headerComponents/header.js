import React, { Component } from 'react';

import mainLogo from './../../images/kchewyLogo.png';


import {
  Link
} from 'react-router-dom';


class Header extends Component {
  render() {
    return (
        <header>
            <div className="logo">
                <Link to ="/"> 
                    <img className="mainlogo1" src={mainLogo}/>
                </Link>
                {/*
                <img class="resize" src="https://www.computerhope.com/cdn/computer-hope.jpg"  alt="Computer Hope logo small"></img>
                */}

            </div>



            <nav>
                <ul>
                    <li className= "first">
                        <Link to ="/bio">Bio</Link>
                        {/*<a href="https://twitter.com/share" className="twitter-share-button">Tweet</a>
                        */}
                    </li>

                    <li>
                        <Link to ="/music">Music</Link>
                    </li>
                    <li>
                        <Link to ="/social">Social</Link>
                    </li>
                    <li className= "last">
                        <Link to ="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>

        </header>

    );
  }
}

export default Header;
