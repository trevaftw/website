import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <h3>Contact</h3>
                The best method to reach me is via email. You can send any inquiries to:<br /><br />
                <a className="email-me" style={{ color: "black" }} href="mailto:trevor.ramlow@gmail.com">trevor.ramlow@gmail.com</a><br /><br />
            </div>
        )
    }
}

export default Contact;