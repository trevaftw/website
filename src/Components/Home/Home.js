import React, { Component } from 'react';

//components
import HomeHeader from './HomeHeader';
import HomeBody from './HomeBody';
import HomeFooter from './HomeFooter';

class Home extends Component {

  render() {
    return (
      <>
        <center>
          <HomeHeader />
          <HomeBody />
          <HomeFooter />
        </center>
      </>
    );
  }
}

export default Home;
