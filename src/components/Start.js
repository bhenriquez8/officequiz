import React, { Component } from 'react';
import officeLogo from '../assets/the-office-logo.jpg';
import { Link } from 'react-router-dom';
import Button from 'material-ui/Button';

class Start extends Component {
  render() {
    return (
      <div className="Start">
        <img alt="office-logo" src={officeLogo} />
        <h2>un-official personality quiz!</h2>
        <Link to={"/questions/1"}>
          <Button variant="raised" color="primary">Start</Button>
        </Link>
      </div>
    );
  }
}

export default Start;
