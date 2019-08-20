import React, { Component } from 'react';

//components
import AboutMe from '../AboutMe/AboutMe';
import Projects from '../Projects/Projects';

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
                            <li className="nav-link" onClick={() => { this.handleClick('About Me') }}><u>About Me</u></li>
                            <li className="nav-link" onClick={() => { this.handleClick('Projects') }}><u>Projects</u></li>
                        </ul>
                    </h2>
                </div>
                <br />
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
            </>
        )
    }
}

export default HomeBody;