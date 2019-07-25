import React, { Component } from 'react';
import Trevor from '../images/trevor.jpg';

//gif
import soloGif from '../images/solo-gif.gif';
import feedbackGif from '../images/feedback-gif.gif';

//styling
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

class Home extends Component {
  render() {
    return (
      <>
        <center>
          <img src={Trevor} className="profile-picture" /><br />
          <br />
          <div className="links">
            <AppBar position="center">
              <Tabs>
                <center>
                <Tab label="Item One" />
                <Tab label="Item Two" />
                <Tab label="Item Three" />
                </center>
              </Tabs>
            </AppBar>
          </div>
          <br />
          <div className="projects">
            <div className="solo-project">
              <label>Solo Project - Card Collection Tracker</label><br />
              <img src={soloGif} />
              {/* <br /><br /> */}
              <p>This is a p box that describes what the project is about. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut nisi in ligula molestie dictum sit amet non enim. Mauris varius accumsan neque, nec sollicitudin diam tincidunt et. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam malesuada, lorem ac porttitor lacinia, ipsum diam consequat tellus, a rutrum ligula eros tempor lacus. Mauris mi velit, cursus sed facilisis sagittis, maximus nec quam. Duis venenatis ipsum eget nisi ultricies rhoncus. Morbi feugiat nunc id lacus ullamcorper aliquet. Nam venenatis nisi metus, quis pulvinar lacus consectetur a. Nullam id massa orci. Etiam sem erat, ornare eu velit id, venenatis aliquam libero. Integer vulputate sem et est facilisis, id mattis est congue. Mauris porttitor id diam sed bibendum. Donec sodales ornare nibh, sit amet scelerisque purus ullamcorper vitae. Morbi at ligula id nisi tincidunt fringilla. Vivamus ac vulputate sem. </p>
            </div>
            <div className="feedback-project">
              <label>Daily Feedback Form</label><br />
              <img src={feedbackGif} />
              <br /><br />
              <p>This is a p box that describes what the project is about. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut nisi in ligula molestie dictum sit amet non enim. Mauris varius accumsan neque, nec sollicitudin diam tincidunt et. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam malesuada, lorem ac porttitor lacinia, ipsum diam consequat tellus, a rutrum ligula eros tempor lacus. Mauris mi velit, cursus sed facilisis sagittis, maximus nec quam. Duis venenatis ipsum eget nisi ultricies rhoncus. Morbi feugiat nunc id lacus ullamcorper aliquet. Nam venenatis nisi metus, quis pulvinar lacus consectetur a. Nullam id massa orci. Etiam sem erat, ornare eu velit id, venenatis aliquam libero. Integer vulputate sem et est facilisis, id mattis est congue. Mauris porttitor id diam sed bibendum. Donec sodales ornare nibh, sit amet scelerisque purus ullamcorper vitae. Morbi at ligula id nisi tincidunt fringilla. Vivamus ac vulputate sem. </p>
            </div>
          </div>
          <footer>
            <br /><br />
          </footer>
        </center>
      </>
    );
  }
}

export default Home;
