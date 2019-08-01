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
                <li onClick={() => { this.handleClick('About Me') }}><u>About Me</u></li>
                <li onClick={() => { this.handleClick('Projects') }}><u>Projects</u></li>
                <li onClick={() => { this.handleClick('Contact') }}><u>Contact</u></li>
              </ul>
            </h2>
          </div>
          <br />
          <div className="project-grid">
            {this.state.display === 'Projects' ?
              <>
                <div className="projects">
                  <h3>Solo Project - Card Collection Tracker</h3><br />
                  <img src={soloGif} alt="A gif of the Card Collection Tracker app" />
                  <p>This is a p box that describes what the project is about. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut nisi in ligula molestie dictum sit amet non enim. Mauris varius accumsan neque, nec sollicitudin diam tincidunt et. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam malesuada, lorem ac porttitor lacinia, ipsum diam consequat tellus, a rutrum ligula eros tempor lacus. Mauris mi velit, cursus sed facilisis sagittis, maximus nec quam. Duis venenatis ipsum eget nisi ultricies rhoncus. Morbi feugiat nunc id lacus ullamcorper aliquet. Nam venenatis nisi metus, quis pulvinar lacus consectetur a. Nullam id massa orci. Etiam sem erat, ornare eu velit id, venenatis aliquam libero. Integer vulputate sem et est facilisis, id mattis est congue. Mauris porttitor id diam sed bibendum. Donec sodales ornare nibh, sit amet scelerisque purus ullamcorper vitae. Morbi at ligula id nisi tincidunt fringilla. Vivamus ac vulputate sem. </p>
                </div>
                <div className="projects">
                  <h3>Daily Feedback Form</h3><br />
                  <img src={feedbackGif} alt="A gif of the Daily Feedback Form app" />
                  <p>This is a p box that describes what the project is about. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut nisi in ligula molestie dictum sit amet non enim. Mauris varius accumsan neque, nec sollicitudin diam tincidunt et. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam malesuada, lorem ac porttitor lacinia, ipsum diam consequat tellus, a rutrum ligula eros tempor lacus. Mauris mi velit, cursus sed facilisis sagittis, maximus nec quam. Duis venenatis ipsum eget nisi ultricies rhoncus. Morbi feugiat nunc id lacus ullamcorper aliquet. Nam venenatis nisi metus, quis pulvinar lacus consectetur a. Nullam id massa orci. Etiam sem erat, ornare eu velit id, venenatis aliquam libero. Integer vulputate sem et est facilisis, id mattis est congue. Mauris porttitor id diam sed bibendum. Donec sodales ornare nibh, sit amet scelerisque purus ullamcorper vitae. Morbi at ligula id nisi tincidunt fringilla. Vivamus ac vulputate sem. </p>
                </div>
              </>
              :
              <>
              </>
            }
            {this.state.display === 'About Me' ?
              <div className="about-me">
                <h3>About Me</h3><br />
                Nice to meet you! My name is Trevor, and I enjoy a variety of hobbies. I actively follow Magic tthe Gathering tournaments, play a variety of board games, and enjoy traveling with my girlfriend to go see bands. Aside from this, I have recently developed a passion for coding and have decided to pursue this at <a style={{color: "black"}} href="https://primeacademy.io/">Prime Digital Academy</a>. Here I have been able to learn more than I ever imagined, and I haven't even scratched the surface on everything there is out there. Here we have focused on learning full-stack development. Some of the languages, frameworks, and programs we’ve used are:
                <br />
                <br /><div className="skill-list">
                  <li>JavaScript</li>
                  <li>jQuery</li>
                  <li>React</li>
                  <li>Redux</li>
                  <li>Node.js</li>
                  <li>PostgreSQL</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Express</li>
                  <li>Material-UI</li>
                  <li>Postman</li>
                  <li>GitHub</li>
                </div><br />
                <br />
                If you're interested in looking at a sample of projects I have done, you can click the Projects header to learn more. If you would like to reach out to me, click the Contact header. 
              </div>
              :
              <>
              </>
            }
            {this.state.display === 'Contact' ?
              <div className="contact">
                <h3>Contact</h3>
                The best method to reach me is via email. You can send any inquiries to:<br />
                <a style={{color: "black"}} href="mailto:trevor.ramlow@gmail.com">trevor.ramlow@gmail.com</a>
              </div>
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
