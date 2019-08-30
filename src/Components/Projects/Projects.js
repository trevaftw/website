import React, { Component } from 'react';

//gif
import soloGif from '../images/solo-gif.gif';
import feedbackGif from '../images/feedback-gif.gif';

class Projects extends Component {

    handleMouseEnter = () => {
        console.log('on mouse enter')
    }

    handleMouseLeave = () => {
        console.log('on mouse leave')
    }

    render() {
        return (
            <>
                <div className="project-grid">
                    <div className="projects">
                        <h3>Solo Project - Card Collection Tracker</h3><br />
                        <img onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} className="project-gif" src={soloGif} alt="A gif of the Card Collection Tracker app" />
                        <p>
                            This app was created to track the value and qunaity of a users Magic: The Gathering collection.
                            A user can create an account and search an external API for cards to get their prices, then add
                            the specific card and quantity to their collection. On their homepage, a user can see what cards
                            they have and the total value of their collection. From the about page, a user has a link to share
                            their collection with non-registered users.
                        </p>
                        <p>
                            A link to the project can be found here:<br />
                            <a style={{ color: "black" }} href="https://mtg-card-tracker.herokuapp.com">MTG Card Collection Tracker</a>
                        </p>
                    </div>
                    <div className="projects">
                        <h3>Daily Feedback Form</h3><br />
                        <img className="project-gif" src={feedbackGif} alt="A gif of the Daily Feedback Form app" /><br />
                        <p>
                            This app allows users to submit feedback on how they felt that day for class. This was built to
                            test knowledge of using different page routes and tracking state with Redux.
                        </p>
                        <p>
                            A link to the project can be found here:<br />
                            <a style={{ color: "black" }} href="https://react-redux-feedback.herokuapp.com/#/">Redux Feedback Form</a>
                        </p>
                    </div>
                </div>
                <div className="about-me">
                    <p>
                        Aside from these projects, the others I have built are also on heroku and will be added soon.
                        You can find the links to them below, and the link to their code is on my github at the bottom
                        of the page.<br />
                        <a style={{ color: "black" }} href="https://trevors-jquery-server-calc.herokuapp.com/">jQuery server side calculator</a><br />
                        <a style={{ color: "black" }} href="https://weekend-to-do-list.herokuapp.com/">Weekend to do list using database</a><br />
                        <a style={{ color: "black" }} href="https://trevors-group-project.herokuapp.com/#/signup1">Group project for non-profit WithAll</a>
                    </p>
                </div>
            </>
        )
    }
}

export default Projects;