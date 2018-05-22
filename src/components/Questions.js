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

class Questions extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      employees: {
        "Dwight": 0,
        "Pam": 0,
        "Jim": 0,
        "Michael": 0
      }
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    const ans = quizPages[this.props.match.params.id]['answers'];
    const answer = ans.indexOf(event.target.value);

    let officeCrew = {...this.state.employees};
    officeCrew[answer] = officeCrew + 1;
    this.setState(prevState => ({
      employees: {
        ...prevState.employees,
        Dwight: prevState.employees['Dwight']++
      }
    }))

    this.setState({
      value: event.target.value
    });
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
            to={`/questions/${pageNumber + 1}`}>
            Next
          </Button>) : (
          <Button
            className="btn"
            variant="raised"
            color="primary"
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
