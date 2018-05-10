import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import Start from './Start';
import Questions from './Questions';
import Results from './Results';

class QuizBoard extends Component {
  render() {
    return (
      <Paper className="QuizBoard">
        <Main />
      </Paper>
    );
  }
}

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Start} />
          <Route path='/questions/:id' component={Questions} />
          <Route path='/results' component={Results} />
        </Switch>
      </main>
    );
  }
}

export default QuizBoard;
