import React, { Component } from 'react';
import Trevor from './trevor.jpg';
import soloGif from './solo-gif.gif';

class Home extends Component {
  render() {
    return (
      <>
      <center>
      <img className="profile-picture" src={Trevor} /><br />
      <p><i>
        This is my about me
        </i></p><br />
        <div className="projects">
          <img src={soloGif} />
        </div>
      </center>
      </>
    );
  }
}

export default Home;
