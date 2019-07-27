import React, { Component } from 'react';
import Trevor from '../images/trevor.jpg';

//gif
import soloGif from '../images/solo-gif.gif';
import feedbackGif from '../images/feedback-gif.gif';

//styling

class Home extends Component {

  state = {
   display: 'About Me',
  }
  
  handleClick = (string) => {
    console.log('hello')
    this.setState({
      display: string
    })
  }

  render() {
    return (
      <>
        <center>
          <img src={Trevor} className="profile-picture" alt="A headshot of Trevor Ramlow" /><br />
          <br />
          <div className="links">
            <h2>
              <ul className="nav-list">
                <li onClick={() => {this.handleClick('About Me')}}><u>About Me</u></li>
                <li onClick={() => {this.handleClick('Projects')}}><u>Projects</u></li>
                <li onClick={() => {this.handleClick('Contact')}}><u>Contact</u></li>
              </ul>
              </h2>
          </div>
          <br />
          <div className="project-grid">
            {this.state.display === 'Projects' ?
              <>
                <div className="projects">
                  <label>Solo Project - Card Collection Tracker</label><br />
                  <img src={soloGif} alt="A gif of the Card Collection Tracker app" />
                  <p>This is a p box that describes what the project is about. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut nisi in ligula molestie dictum sit amet non enim. Mauris varius accumsan neque, nec sollicitudin diam tincidunt et. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam malesuada, lorem ac porttitor lacinia, ipsum diam consequat tellus, a rutrum ligula eros tempor lacus. Mauris mi velit, cursus sed facilisis sagittis, maximus nec quam. Duis venenatis ipsum eget nisi ultricies rhoncus. Morbi feugiat nunc id lacus ullamcorper aliquet. Nam venenatis nisi metus, quis pulvinar lacus consectetur a. Nullam id massa orci. Etiam sem erat, ornare eu velit id, venenatis aliquam libero. Integer vulputate sem et est facilisis, id mattis est congue. Mauris porttitor id diam sed bibendum. Donec sodales ornare nibh, sit amet scelerisque purus ullamcorper vitae. Morbi at ligula id nisi tincidunt fringilla. Vivamus ac vulputate sem. </p>
                </div>
                <div className="projects">
                  <label>Daily Feedback Form</label><br />
                  <img src={feedbackGif} alt="A gif of the Daily Feedback Form app" />
                  <p>This is a p box that describes what the project is about. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut nisi in ligula molestie dictum sit amet non enim. Mauris varius accumsan neque, nec sollicitudin diam tincidunt et. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam malesuada, lorem ac porttitor lacinia, ipsum diam consequat tellus, a rutrum ligula eros tempor lacus. Mauris mi velit, cursus sed facilisis sagittis, maximus nec quam. Duis venenatis ipsum eget nisi ultricies rhoncus. Morbi feugiat nunc id lacus ullamcorper aliquet. Nam venenatis nisi metus, quis pulvinar lacus consectetur a. Nullam id massa orci. Etiam sem erat, ornare eu velit id, venenatis aliquam libero. Integer vulputate sem et est facilisis, id mattis est congue. Mauris porttitor id diam sed bibendum. Donec sodales ornare nibh, sit amet scelerisque purus ullamcorper vitae. Morbi at ligula id nisi tincidunt fringilla. Vivamus ac vulputate sem. </p>
                </div>
              </>
              :
              <>
              </>
            }
            {this.state.display === 'About Me' ?
              <>
                <h3>About Me</h3>
              </>
              :
              <>
              </>
            }
             {this.state.display === 'Contact' ?
              <>
                <h3>Contact</h3>
              </>
              :
              <>
              </>
            }
            
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
