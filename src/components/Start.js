import React, { Component } from 'react';
import officeLogo from '../assets/the-office-logo.jpg';
import { Link } from 'react-router-dom';

class Start extends Component {
  render() {
    return (
      <div className="Start">
        <img alt="office-logo" src={officeLogo} />
        <h2>un-official personality quiz!</h2>
        <button className="btn">
          <Link to={"/questions/1"}>Take Quiz</Link>
        </button>
      </div>
    );
  }
}

export default Start;
