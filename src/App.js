import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';



import './Assets/css/default.min.css';

import Header from './components/headerComponents/header';
import Footer from './components/footerComponents/footer';
import Homepage from './components/pages/homePage';
import Biopage from './components/pages/bioPage';
import Musicpage from './components/pages/musicPage';
import Contactpage from './components/pages/contactPage';
import Socialpage from './components/pages/socialPage';




class App extends Component {
  render() {
    return (

      <Router>
      <div className="App">
        <Header />
          <Route exact path = '/' component={Homepage}/>
          <Route exact path = '/bio' component={Biopage}/>
          <Route exact path = '/music' component={Musicpage}/>
          <Route exact path = '/social' component={Socialpage}/>
          <Route exact path = '/contact' component={Contactpage}/>
        {/* 
        <Footer />
        */}
      </div>
      </Router>
    );
  }
}

export default App;
