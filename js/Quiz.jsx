const React = require('react')
const Question = require('./Question')
const AnswerOptions = require('./AnswerOptions')
const { string, func, array } = React.PropTypes

const Quiz = React.createClass({
  propTypes: {
    onAnswerSubmit: func.isRequired,
    question: string.isRequired,
    answers: array.isRequired
  },
  getInitialState: function () {
    return {
      step: 0,
      count: 0
    }
  },
  render () {
    return (
      <div className='container'>
        <div className='questions'>
          <Question question={this.props.question} />
          {this.props.answers.map((object) => {
            return <AnswerOptions answer={object.answer} key={object.value} value={object.value} onAnswerSubmit={this.props.onAnswerSubmit} />
          })
          }
        </div>
      </div>
    )
  }
})

module.exports = Quiz
