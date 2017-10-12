import React, { Component } from 'react';

import {
  Link
} from 'react-router-dom';


class Header extends Component {
  render() {
    return (
    	<header>

    		<div className="logo">
    			<Link to ="/"></Link>
    			LOGO
			</div>

			<nav>
				<ul>
					<li className= "first">
    					<Link to ="/Onepage">One</Link>
					</li>

					<li>
						<Link to ="/">Two</Link>
					</li>

					<li className= "last">
						<Link to ="/">Three</Link>
					</li>
				</ul>
			</nav>
		</header>

    );
  }
}

export default Header;
