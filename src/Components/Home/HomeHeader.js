import React, { Component } from 'react';

//picture
import Trevor from '../images/trevor.jpg';

class HomeHeader extends Component {

    render() {
        return (
            <>
                <img src={Trevor} className="profile-picture" alt="A headshot of Trevor Ramlow" /><br />
                <br />
            </>
        )
    }
}

export default HomeHeader