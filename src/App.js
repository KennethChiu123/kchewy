import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';



import './Assets/css/default.min.css';

import Header from './components/headerComponents/header';
import Footer from './components/footerComponents/footer';
import Homepage from './components/pages/homePage';
import Onepage from './components/pages/onePage';




class App extends Component {
  render() {
    return (

      <Router>
      <div className="App">
        <Header />
          <Route exact path = '/' component={Homepage}/>
          <Route exact path = '/Onepage' component={Onepage}/>
        <Footer />

      </div>
      </Router>
    );
  }
}

export default App;
