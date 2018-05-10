import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormLabel, FormControl, FormControlLabel, FormHelperText } from 'material-ui/Form';

const quizPages = {
    1: {
      questions: ["Question! Who would win a fight between a bear and a tiger?",
       "Question! What is the first thing you say to a client?",
       "Question! What amount of reams sold do you feel is appropriate for a day?",
       "Question! What do you wear to a gala?"],
      answers: [["Bear", "Tiger", "A cross between the two", "A forest fire"],
        ["Hello", "Good Morning Vietnam!", "Dunder Mifflin, how can I assist your paper needs?", "You don't, you let the client answer first. Shows your dominance."],
        ["8", "20", "100", "Whatever you feel you can do that day"],
        ["What's currently in style", "A suit, preferrably versace", "Dress casually", "A suit, but underneath battle ready armor."]
      ]
    },
    2: {
      questions: ["Question 5", "Question 6", "Question 7", "Question 8"],
      answers: [["Answer 17", "Answer 18", "Answer 19", "Answer 20"],
        ["Answer 55", "Answer 66", "Answer 77", "Answer 88"],
        ["Answer 90", "Answer 100", "Answer 111", "Answer 122"],
        ["Answer 133", "Answer 144", "Answer 155", "Answer 166"]
      ]
    },
    3: {
      questions: ["Question 9", "Question 10", "Question 11", "Question 12"],
      answers: [["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        ["Answer 5", "Answer 6", "Answer 7", "Answer 8"],
        ["Answer 9", "Answer 10", "Answer 11", "Answer 12"],
        ["Answer 13", "Answer 14", "Answer 15", "Answer 16"]
      ]
    },
    4: {
      questions: ["Question 13", "Question 14", "Question 15", "Question 16"],
      answers: [["Answer 17", "Answer 22", "Answer 38", "Answer 44"],
        ["Answer 521", "Answer 642", "Answer 732", "Answer 83"],
        ["Answer 985", "Answer 102", "Answer 1112", "Answer 1221"],
        ["Answer 1304", "Answer 1401", "Answer 1509", "Answer 1689"]
      ]
    }
};

class Questions extends Component {
  constructor() {
    super();
    this.state = {
      value: 'female'
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  }

  render() {
    const pageNum = parseInt(this.props.match.params.id, 10);
    const quizQandA = quizPages[pageNum];

    const page = (pageNum === 0) ? (
      <div>Sorry, technical difficulties</div>
    ) : (
      <FormControl component="fieldset">
      {
        quizQandA['answers'].map((p, index) => {
          return (
            <div>
              <FormLabel component="legend">{quizQandA['questions'][index]}</FormLabel>
              <RadioGroup
                aria-label="questions"
                name="questions1"
                value={this.state.value}
                onChange={this.handleChange}
                >
                {
                  p.map(val => {
                    return <FormControlLabel value={val} control={<Radio />} label={val} />
                  })
                }
                </RadioGroup>
            </div>
          )
        })
      }
      </FormControl>
    );

    return (
      <div className="Questions">
        {page}
      </div>
    )
  }
}

class Cycler extends Component {
  render() {
    return (
      <div className="Cycler">
        <button className="btn-cycle">
          {(this.props.num === 2) ? (
            <Link to='/'>Home</Link> ) : (
              <Link to={`/questions/${this.props.num - 2}`}>Back</Link>
            )
          }
        </button>
        <button className="btn-cycle-2">
          {!(this.props.num === 5) ? (
            <Link to={`/questions/${this.props.num}`}>Next</Link>
            ) : (
              <Link to={'/results'}>Finish</Link>
            )
          }
        </button>
      </div>
    );
  }
}

export default Questions;
