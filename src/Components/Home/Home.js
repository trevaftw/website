import React, { Component } from 'react';

//components
import AboutMe from '../AboutMe/AboutMe';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import HomeHeader from './HomeHeader';

class Home extends Component {

  state = {
    display: 'About Me',
  }

  handleClick = (string) => {
    this.setState({
      display: string
    })
  }

  render() {
    return (
      <>
        <center>
          <HomeHeader />
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
              <Projects display={this.state} />
              :
              <>
              </>
            }
            {this.state.display === 'About Me' ?
              <AboutMe display={this.state} />
              :
              <>
              </>
            }
            {this.state.display === 'Contact' ?
              <Contact display={this.state} />
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
