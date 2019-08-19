import React, { Component } from 'react';

//components
import HomeHeader from './HomeHeader';
import HomeBody from './HomeBody';

class Home extends Component {

  render() {
    return (
      <>
        <center>
          <HomeHeader />
          <HomeBody />
          <footer>
            <br /><br />
          </footer>
        </center>
      </>
    );
  }
}

export default Home;
