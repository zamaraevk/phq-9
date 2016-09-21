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
  render () {
    return (
      <div className='container'>
        <div className='questions'>
          <Question question={this.props.question} />
          {this.props.answers.map((options) => {
            return <AnswerOptions answer={options.answer} key={options.value} value={options.value} onAnswerSubmit={this.props.onAnswerSubmit} />
          })
          }
        </div>
      </div>
    )
  }
})

module.exports = Quiz
