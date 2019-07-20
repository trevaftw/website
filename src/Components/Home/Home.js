import React, { Component } from 'react';
import Trevor from './trevor.jpg';

class Home extends Component {
  render() {
    return (
      <>
      <center>
      <img className="profile-picture" src={Trevor} />
      </center>
      </>
    );
  }
}

export default Home;
