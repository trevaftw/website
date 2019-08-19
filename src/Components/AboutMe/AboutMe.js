import React, { Component } from 'react';

class AboutMe extends Component {
    render() {
        return (
            <div className="about-me">
                <p className="about-me-info">Nice to meet you! My name is Trevor, and I enjoy a variety of hobbies. I actively follow Magic tthe Gathering tournaments, play a variety of board games, and enjoy traveling with my girlfriend to go see bands. Aside from this, I have recently developed a passion for coding and have decided to pursue this at <a style={{ color: "black" }} href="https://primeacademy.io/">Prime Digital Academy</a>. Here I have been able to learn more than I ever imagined, and I haven't even scratched the surface on everything there is out there. Here we have focused on learning full-stack development. Some of the languages, frameworks, and programs we’ve used are: </p>
                <div className="skill-list">
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
                    <li>Node Cron</li>
                    <li>twilio</li>
                    <li>Nodemailer</li>
                </div>
                <p className="about-me-info">If you're interested in looking at a sample of projects I have done, you can click the Projects header to learn more. If you would like to reach out to me, click the Contact header.</p>
            </div>
        )
    }
}

export default AboutMe;