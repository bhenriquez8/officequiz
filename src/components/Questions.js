import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const quizPages = {
    1: {
      questions: ["Question 1", "Question 2", "Question 3", "Question 4"],
      answers: [["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        ["Answer 5", "Answer 6", "Answer 7", "Answer 8"],
        ["Answer 9", "Answer 10", "Answer 11", "Answer 12"],
        ["Answer 13", "Answer 14", "Answer 15", "Answer 16"]
      ]
    },
    2: {
      questions: ["Question 5", "Question 6", "Question 7", "Question 8"],
      answers: [["Answer 17", "Answer 18", "Answer 19", "Answer 20"],
        ["Answer 5", "Answer 6", "Answer 7", "Answer 8"],
        ["Answer 9", "Answer 10", "Answer 11", "Answer 12"],
        ["Answer 13", "Answer 14", "Answer 15", "Answer 16"]
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
      answers: [["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        ["Answer 5", "Answer 6", "Answer 7", "Answer 8"],
        ["Answer 9", "Answer 10", "Answer 11", "Answer 12"],
        ["Answer 13", "Answer 14", "Answer 15", "Answer 16"]
      ]
    }
};

class Questions extends Component {
  render() {
    const pageNum = parseInt(this.props.match.params.id, 10);
    const quizQandA = quizPages[pageNum];

    const page = (pageNum === 0) ? (
      <div>Sorry, technical difficulties</div>
    ) : (
      <form>
        {
          quizQandA['answers'].map((p, index) => {
            return (
              <div>
                <label>{quizQandA['questions'][index]}</label><br />
              {
                p.map(val => {
                  return <label><input key={val} type="radio" value={val} />
                    {val}<br /></label>
                })
              }
              </div>
            )
          })
        }
        <Cycler num={pageNum + 1}/>
      </form>
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
