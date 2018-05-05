import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Start from './Start';
import Questions from './Questions';

class QuizBoard extends Component {
  render() {
    return (
      <div className="QuizBoard">
        <Main />
      </div>
    );
  }
}

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Start} />
          <Route path='/questions' component={Questions} />
        </Switch>
      </main>
    );
  }
}

export default QuizBoard;
