import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

class Results extends Component {
  componentWillMount() {
    console.log(this.props.location.state.fromQuestions["Dwight"]);
  }

  render() {
    return (
      <div className="Results">
        <Typography variant="display2" gutterBottom>
          Congratulations! You Are:
        </Typography>
        <Typography variant="display1" gutterBottom>
          {this.props.location.state.fromQuestions}
        </Typography>
      </div>
    );
  }
}

export default Results;
