const React = require('react')
const Question = require('./Question')
const AnswerOptions = require('./AnswerOptions')
const { answers } = require('../public/data')
const { string, func } = React.PropTypes

const Quiz = React.createClass({
   // Prop validation
  propTypes: {
    onAnswerSubmit: func.isRequired,
    question: string.isRequired
  },
  // Render question and list of all answers options
  render () {
    return (
      <div className='container'>
        <div className='questions'>
          <Question question={this.props.question} />
          <ul className='answers'>
              {answers.map((options) => {
                return <AnswerOptions
                  answer={options.answer}
                  key={options.value}
                  value={options.value}
                  onAnswerSubmit={this.props.onAnswerSubmit} />
              })
             }
          </ul>
        </div>
      </div>
    )
  }
})

module.exports = Quiz
