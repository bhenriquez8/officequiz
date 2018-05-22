import React, { Component } from 'react';

class Results extends Component {
  componentWillMount() {
    console.log(this.props.location.state.fromQuestions["Dwight"]);
  }

  render() {
    return (
      <div className="Results">
        <h1>You Finished!</h1>
      </div>
    );
  }
}

export default Results;
