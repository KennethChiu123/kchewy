import React, { Component } from 'react';

import mainLogo from './../../images/logo2.jpg';
//550 × 150

import {
  Link
} from 'react-router-dom';


class Header extends Component {
  render() {
    return (
        <header>
            <div className="logo">
                <Link to ="/"> 
                    <img className="mainlogo1" alt="Amanda" src={mainLogo}/>
                </Link>
                {/*
                <img class="resize" src="https://www.computerhope.com/cdn/computer-hope.jpg"  alt="Computer Hope logo small"></img>
                */}
            </div>
            <nav>
                <ul> 
                    <li className= "first">
                        <Link to ="/bio">Bio</Link>
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
