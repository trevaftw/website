import React, { Component } from 'react';
import Trevor from './trevor.jpg';
import soloGif from './solo-gif.gif';
import feedbackGif from './feedback-gif.gif';

class Home extends Component {
  render() {
    return (
      <>
        <center>
          <img src={Trevor} className="profile-picture"/><br />
          <p><i>
            This is my about me
        </i></p><br />
          <div className="projects">
            <div className="solo-project">
              <img src={soloGif} /><br /><br />
              <label>Solo Project</label>
            </div>
            <div className="feedback-project">
              <img src={feedbackGif} /><br /><br />
              <label>This will be another project.</label>
            </div>
          </div>
        </center>
      </>
    );
  }
}

export default Home;
