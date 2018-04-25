import React, { Component } from 'react';
import Questions from './Questions';
import officeLogo from '../assets/the-office-logo.jpg';

class Start extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({
      isClicked: !this.isClicked
    });
  }

  render() {
    if (!this.state.isClicked)
      return (
        <div className="Start">
          <img alt="office-logo" src={officeLogo} />
          <h2>un-official personality quiz!</h2>
          <button className="btn" onClick={this.handleClick}>Take Quiz</button>
        </div>
      )
    else
      return (
        <Questions />
      )
  }
}

export default Start;
