import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Radio, { RadioGroup } from 'material-ui/Radio';
import Button from 'material-ui/Button';
import { FormLabel, FormControl, FormControlLabel } from 'material-ui/Form';

const quizPages = {
    1: {
      question: "Question! Who would win a fight between a bear and a tiger?",
      answers: ["Bear", "Tiger", "A cross between the two", "A forest fire"],
      employee: ["Dwight", "Pam", "Jim", "Michael"]
    },
    2: {
      question: "Question! What is the first thing you say to a client?",
      answers: ["Hello", "Good Morning Vietnam!", "Dunder Mifflin, how can I assist your paper needs?", "You don't, you let the client answer first. Shows your dominance."],
      employee: ["Dwight", "Pam", "Jim", "Michael"]
    },
    3: {
      question: "Question! What amount of reams sold do you feel is appropriate for a day?",
      answers: ["8", "20", "100", "Whatever you feel you can do that day"],
      employee: ["Dwight", "Pam", "Jim", "Michael"]
    },
    4: {
      question: "Question! What do you wear to a gala?",
      answers: ["What's currently in style", "A suit, preferrably versace", "Dress casually", "A suit, but underneath battle ready armor."],
      employee: ["Dwight", "Pam", "Jim", "Michael"]
    }
};

const scoreKeeper = {
  "Dwight": 0,
  "Pam": 0,
  "Jim": 0,
  "Michael": 0
};

class Questions extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      employees: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleResults = this.handleResults.bind(this);
  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  }

  handleClick = event => {
    this.updateScore();
  }

  handleResults = event => {
    this.updateScore();

    let keys = Object.keys(scoreKeeper);
    let finalResults = keys[0];

    for (let i = 0; i < 4; ++i) {
      if (scoreKeeper[keys[i]] > scoreKeeper[finalResults]) {
        finalResults = keys[i];
      }
    }

    this.setState({
      employees: finalResults
    })
  }

  updateScore() {
    const currentPage = quizPages[this.props.match.params.id];
    const radioOptions = currentPage['answers'];
    const index = radioOptions.indexOf(this.state.value);
    const officeCharacter = currentPage['employee'][index];

    ++scoreKeeper[officeCharacter];
    console.log(scoreKeeper[officeCharacter]);
  }

  render() {
    const pageNumber = parseInt(this.props.match.params.id, 10);
    const quizQandA = quizPages[pageNumber];

    const page = (pageNumber < 1 || pageNumber > 5) ? (
      <div>Sorry, technical difficulties</div>
    ) : (
      <div className="radio-questions">
        <p>{pageNumber}/4</p>
        <FormControl component="fieldset">
          <FormLabel component="legend">{quizQandA['question']}</FormLabel>
          <RadioGroup
            aria-label="questions"
            name="question1"
            value={this.state.value}
            onChange={this.handleChange}
            >
            {
              quizQandA['answers'].map(ans => {
                return <FormControlLabel key={ans} value={ans} control={<Radio />} label={ans} />
              })
            }
          </RadioGroup>
        </FormControl>
        { pageNumber < 4 ? (<Button
            className="btn"
            variant="raised"
            color="primary"
            component={Link}
            to={`/questions/${pageNumber + 1}`}
            onClick={this.handleClick}>
            Next
          </Button>) : (
          <Button
            className="btn"
            variant="raised"
            color="primary"
            onClick = {this.handleResults}
            component={Link}
            to={{ pathname: '/results', state:{ fromQuestions: this.state.employees}}}>
            Finish
          </Button>
        )
      }
      </div>
    );

    return (
      <div className="Questions">
        {page}
      </div>
    )
  }
}

export default Questions;
