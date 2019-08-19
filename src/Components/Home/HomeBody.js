import React, { Component } from 'react';

//components
import AboutMe from '../AboutMe/AboutMe';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

class HomeBody extends Component {
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
                        <Projects />
                        :
                        <>
                        </>
                    }
                    {this.state.display === 'About Me' ?
                        <AboutMe />
                        :
                        <>
                        </>
                    }
                    {this.state.display === 'Contact' ?
                        <Contact />
                        :
                        <>
                        </>
                    }

                </div>
            </>
        )
    }
}

export default HomeBody;