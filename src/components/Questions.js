import React, { Component } from 'react';

class Questions extends Component {
  constructor() {
    super();
    this.state = {
      answers: []
    };
    this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="Questions">
        <form onSubmit={this.onSubmit}>
          <label>Question One</label><br />
          <input type='radio' id='question1' />
          <label>Answer One</label><br />
          <input type='radio' id='question2' />
          <label>Answer Two</label><br />
          <input type='radio' id='question3' />
          <label>Answer Three</label>
        </form>
        <Cycler />
      </div>
    );
  }
}

class Cycler extends Component {
  render() {
    return (
      <div className="Cycler">
        <button className="btn-cycle">Back</button>
        <button className="btn-cycle-2">Next</button>
      </div>
    );
  }
}

export default Questions;
